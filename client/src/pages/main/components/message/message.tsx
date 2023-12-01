import {Box} from "@grid";
import React, {FC} from "react";
import {MessageProps} from './types'

export const Message:FC<MessageProps> = ({userName, message, isMyMessage = false}) => {

    return (<Box justifyContent={isMyMessage ? 'flex-end' : 'flex-start'} isFullWidth >
        <div style={{display: "inline-flex", flexDirection: 'column', background: 'silver', borderRadius: '4px', padding: '5px'}} >
            {!isMyMessage && <p><b>{userName}</b></p>}
            <span>
                {message}
            </span>
        </div>
    </Box>)
}