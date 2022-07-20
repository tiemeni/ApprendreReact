import { combineReducers } from "redux";
import CommonReducer from "../commons/reducers";
import UserReducers from "../users/reducers";



const rootReducer = combineReducers({
    Common: CommonReducer,
    Users: UserReducers
})

export default rootReducer;