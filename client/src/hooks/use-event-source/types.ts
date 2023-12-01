export interface UseEventSourceProps {
    url: string,
    onJoined?: (data: string, e: MessageEvent) => void,
    onMessage?: (data: string, e: MessageEvent) => void,
    onLeft?: (data: string, e: MessageEvent) => void,
    onError?: (e: MessageEvent) => void,
    onConnected?: (e: MessageEvent) => void
}