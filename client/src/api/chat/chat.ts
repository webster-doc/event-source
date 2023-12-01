import axios from "axios";
import {API_URL} from "@const"
import {UserModel, MessageModel, SendMessageModel} from './types'

export const chatApi = {
    esConnecting: {
        url: ({userName, userId}) => `${API_URL}/connect?userName=${userName}&id=${userId}`,
    },
    sendMessage: {
        url: () => '/message',
        fetcher: async (url, { arg: {message,  userName, id} }: { arg: SendMessageModel}) => {

            const {data} = await axios.post<SendMessageModel>(`${API_URL}${url}`, {
                id,
                message,
                userName
            })

            return data
        }
    },
    getMessagesList: {
        url: () => '/message',
        fetcher: async (url) => {

            const {data} = await axios.get<MessageModel[]>(`${API_URL}${url}`)

            return data
        }
    },
    getUsersList: {
        url: () => '/users',
        fetcher: async (url) => {

            const {data} = await axios.get<UserModel[]>(`${API_URL}${url}`)

            return data
        },
    }
}