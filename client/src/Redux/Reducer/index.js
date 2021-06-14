import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postsReducer from "./postReducer";
const rootReducer = combineReducers({ userReducer, postsReducer });
export default rootReducer;
