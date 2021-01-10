import {combineReducers} from "redux";
import {todolistTeduser} from "./todo/reducers";

// COMBINE REDUCERS
export let reducer = combineReducers({
    toDosList: todolistTeduser,
})