import React, {useState} from 'react'
import useSWRMutation from 'swr/mutation'
import useSWR from "swr/immutable";
import {Container} from "@grid"
import {PrimaryButton} from "@ui-kit/button/primary"
import { H3 } from "@typography"
import {PrimaryTextInput} from "@inputs/text-input/primary"
import {PrimarySpinner} from "@ui-kit/loading/spinner/primary";
import {MessagesList} from "./components/compose/messages-list";
import {UsersList} from "./components/compose/users-list";
import {getUserId} from './helpers/getUserId'
import {useSwitch} from "@shared/hooks";
import {useEventSource} from "@hooks";
import {chatApi} from "@api/chat";


const userId = getUserId()
const userName = `user_${userId}`

export const MainPage = () => {
    const [value, setValue] = useState('');
    const [isESConnected, markESConnecting] = useSwitch(false);

    const { trigger: sendMessage, isMutating: isMessagesSending } = useSWRMutation(chatApi.getMessagesList.url(), chatApi.sendMessage.fetcher)
    const { data: usersList, mutate: updateUsersList } = useSWR(isESConnected ? chatApi.getUsersList.url() : null, chatApi.getUsersList.fetcher)
    const { data: messagesList, mutate: updateMessagesList } = useSWR(isESConnected ? chatApi.getMessagesList.url() : null, chatApi.getMessagesList.fetcher)
    useEventSource({
        url: chatApi.esConnecting.url({userName, userId}),
        onConnected: () => {
            markESConnecting()
        },
        onJoined: async (d) => {
            await updateUsersList()
        },
        onLeft: async () => {
            await updateUsersList()
        },
        onMessage: async () => {
            await updateMessagesList()
        },
        onError: () => {

        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await sendMessage({
                message: value,
                userName,
                id: userId
        })

    }

    return (<Container className='y-offset-xl'>

        {isESConnected ? <>

            <H3>Участники</H3>

            <UsersList usersList={usersList} />

            <br/>

            <form onSubmit={handleSubmit}>
                <PrimaryTextInput onChange={e => setValue(e.target.value)} />
                <br/>
                <PrimaryButton label="Submit" disabled={isMessagesSending} type='submit' />
            </form>

            <MessagesList messagesList={messagesList} myId={userId} />


        </> : <PrimarySpinner alignX='center' />}


    </Container>)
}