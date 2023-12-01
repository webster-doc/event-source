const express = require('express');
const cors = require('cors');
const events = require('events')
const parse = require('url').parse;
const PORT = 5080;

const emitter = new events.EventEmitter();

const app = express()

app.use(cors())
app.use(express.json())

let messagesList = []
let usersList = []

app.get('/connect', (req, res) => {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
    })
    const url = parse(req.url, true);
    const connectingUserName = url.query.userName
    const connectingUserId = url.query.id

    emitter.emit('joined', {joinedUserId: connectingUserId, joinedUserName: connectingUserName})

    const connectedHandler = ({connectedUserId, connectedUserName}) => {
        const isUserExist = usersList.find((item) => item.id == connectedUserId)

        if (!isUserExist) {
            usersList.push({userName: connectedUserName, id: connectedUserId})
        }

        res.write(`event: connected\ndata: ${JSON.stringify(connectedUserId)} \n\n`)
    }

    const joinedHandler = ({joinedUserId, joinedUserName}) => {
        const isUserExist = usersList.find((item) => item.id == joinedUserId)

        if (!isUserExist) {
            usersList.push({userName: joinedUserName, id: joinedUserId})
        }

        res.write(`event: joined\ndata: ${JSON.stringify(joinedUserId)} \n\n`)
    }

    const messageHandler = ({message}) => {
        res.write(`data: ${JSON.stringify(message)} \n\n`)
    }

    const leftHandler = (leftUserId) => {
        res.write(`event: left\ndata: ${JSON.stringify(leftUserId)} \n\n`)
    }

    const errorHandler = () => {
        console.log('error')
    }

    emitter.once('connected', connectedHandler)
    emitter.on('joined', joinedHandler)
    emitter.on('message', messageHandler)
    emitter.on('left', leftHandler)
    emitter.on('error', errorHandler)

    req.on('close', () => {
        const isUserExist = usersList.find((item) => +item.id === +connectingUserId)

        if (isUserExist) {
            usersList = usersList.filter((item) => +item.id !== +connectingUserId)
            emitter.emit('left', connectingUserId)
            emitter.removeListener('connected', connectedHandler);
            emitter.removeListener('joined', joinedHandler);
            emitter.removeListener('left', leftHandler);
            emitter.removeListener('message', messageHandler);
            emitter.removeListener('error', errorHandler);
        }

        res.end();
    });

    emitter.emit('connected', {connectedUserId: connectingUserId, connectedUserName: connectingUserName})
})

app.get('/users', (req, res) => {

    res.status(200)
    res.send(usersList)
})

app.get('/message', (req, res) => {

    res.status(200)
    res.send(messagesList)
})

app.post('/message', ((req, res) => {
    const messageData = req.body;
    messagesList.push(messageData)
    emitter.emit('message', messageData)

    res.send(messageData);
}))


app.listen(PORT, () => console.log(`server started on port ${PORT}`))
