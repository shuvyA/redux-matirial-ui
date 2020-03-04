import { combineReducers } from "redux";

import users from "./users.reducer";

export const reducersMap = {
  users
};

export default combineReducers(reducersMap);
