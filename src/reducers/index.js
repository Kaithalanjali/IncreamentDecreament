//here we are combining methodology of all the action at a single place
import changeTheNumber from "./updown";
import {combineReducers} from "redux";

const rootReducer = combineReducers(changeTheNumber);

export default rootReducer;