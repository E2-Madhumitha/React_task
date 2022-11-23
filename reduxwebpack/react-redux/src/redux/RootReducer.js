import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import IceReducer from "./Ice/IceReducer";

const rootReducer=combineReducers({
    cake:cakeReducer ,
    ice:IceReducer
})
export default rootReducer