import {getCookie, setCookie} from "@libs/cookie";

export const getUserId = () => {
    let userId = getCookie('userId')

    if (!userId) {
        userId = String(Date.now())
        setCookie('userId', userId)
    }

    return userId
}
