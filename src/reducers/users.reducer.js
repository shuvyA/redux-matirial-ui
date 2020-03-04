import { handleActions } from "redux-actions";
import { ADD_NEW_USER } from "../actions/users.actions";

import set from "lodash/fp/set";
import { makeId } from "../util/users-util";
import { users } from "../config/users";

const initialState = users;

const usersReducer = handleActions(
  {
    [ADD_NEW_USER](state, action) {
      const userPayload = action.payload;

      const newUser = {
        id: makeId(7),
        ...userPayload
      };

      return set(newUser.id, newUser, state);
    }
  },
  initialState
);

export default usersReducer;
