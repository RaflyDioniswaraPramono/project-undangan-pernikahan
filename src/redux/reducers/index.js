import { combineReducers } from "redux";
import darkModeToggler from "./DarkModeReducer";

const rootReducer = combineReducers({
  dark: darkModeToggler,
});

export default rootReducer;
