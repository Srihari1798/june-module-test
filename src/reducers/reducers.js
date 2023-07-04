import { combineReducers } from "redux";
import userReducers from "./userReducers";
import detailReducer from "./detailReducer";



const reducers = combineReducers({
    posts: userReducers,
    detailsCard: detailReducer
})

export default reducers;