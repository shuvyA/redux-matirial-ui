export const ADD_NEW_USER = "ADD_NEW_USER";
// export const START_TIMER = "START_TIMER";
// export const PLAY_TASK = "PLAY_TASK";
// export const PAUSE_TASK = "PAUSE_TASK";

export const addNewUser = userPayload => {
  return {
    type: ADD_NEW_USER,
    payload: userPayload
  };
};
