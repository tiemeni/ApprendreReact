import { RESET_APP } from "./types"

const initialState = {}

const CommonReducer = (state = initialState, action) => {
    switch(action.type){
        case RESET_APP : 
        return {
            ...state
        }
        default :
        return state;
    }
}

export default CommonReducer