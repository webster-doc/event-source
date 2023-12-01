export interface UserModel {
    id: string,
    userName: string,
}

export interface MessageModel {
    id: string,
    userName: string,
    message: string
}

export interface SendMessageModel {
    message: string,
    userName: string,
    id: string
}