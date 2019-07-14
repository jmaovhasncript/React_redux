import { combineReducers } from "redux";
import course from "./courseReducer";
import author from "./authorReducer";

const rootReducer = combineReducers({
  courses: course,
  authors : author
});

export default rootReducer;
