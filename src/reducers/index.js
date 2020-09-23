import { combineReducers } from "redux";
import todoReducer from "./todoReducer"
import inputFieldReducer from "./inputFieldReducer";

export default combineReducers({
    todos : todoReducer,
    inputValue : inputFieldReducer
});