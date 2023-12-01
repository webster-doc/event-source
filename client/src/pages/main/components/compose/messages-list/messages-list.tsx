import React from "react";
import {Box} from "@grid";
import {Message} from "./../../message"


export const MessagesList = ({messagesList, myId}) => (
    <Box direction='column' gap='10px' className='y-offset-sm' >
        {messagesList && messagesList.map((messageProps, index) => (<Message key={index} {...messageProps} isMyMessage={myId === messageProps.id} />))}
    </Box>
)