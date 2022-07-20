import { SAVE_USER } from "./actions";


const initalState = {
    users : []
}

const UserReducers = (state = initalState, action) => {
    switch(action.type){
        case SAVE_USER :
            let users = state.users;
            users.push(action.user)
        return {
            ...state,
            users : [...users]
        }
        default :
        return state;
    }
}

export default UserReducers