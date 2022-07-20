import { SAVE_USER } from "../users/actions"


export const saveUser = (user) => {
    return {
        type : SAVE_USER,
        user
    }
}