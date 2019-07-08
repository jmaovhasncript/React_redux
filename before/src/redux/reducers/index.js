import { combineReducers } from "redux";
import course from "./courseReducer";

const rootReducer = combineReducers({
  course: course
});

export default rootReducer;
