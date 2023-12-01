export type SetCookie = (name: string, value: string, options?: {expires?: Date | string, path?: string}) => void

export type GetCookie = (name: string, serverCookies?: string) => string
