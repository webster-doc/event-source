import {useSwitch} from "@shared/hooks";
import {useEffect} from "react";
import {UseEventSourceProps} from "./types"


export const useEventSource = ({url, onJoined, onMessage, onLeft, onError, onConnected}:UseEventSourceProps) => {
    const [isESConnected, markSuccessConnection] = useSwitch(false)

    useEffect(() => {
        const eventSource = new EventSource(url)



        const connectedHandler = (event) => {
            markSuccessConnection()
            if (onConnected) onConnected(event)
        }

        const messageHandler = (event) => {
            const data = JSON.parse(event.data);
            if (onMessage) onMessage(data, event)
        }

        const joinedHandler = (event) => {
            const data = JSON.parse(event.data);
            if (onJoined) onJoined(data, event)
        }

        const leftHandler = (event) => {
            const data = JSON.parse(event.data);
            if (onLeft) onLeft(data, event)
        }

        const errorHandler = (event) => {
            if (onError) onError(event)
        }

        eventSource.addEventListener('connected', connectedHandler)
        eventSource.addEventListener('message', messageHandler)
        eventSource.addEventListener('joined', joinedHandler);
        eventSource.addEventListener('left', leftHandler);
        eventSource.addEventListener('error', errorHandler);


        return () => {
            eventSource.removeEventListener('connected', connectedHandler);
            eventSource.removeEventListener('message', messageHandler);
            eventSource.removeEventListener('joined', joinedHandler);
            eventSource.removeEventListener('left', leftHandler);
            eventSource.removeEventListener('error', errorHandler);
        }


    }, [])

    return isESConnected
}
