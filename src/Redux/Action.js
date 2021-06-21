import { SET_CURRENT_USER, SET_CURRENT_USER_ROLE,  } from "./ActionType";
export const setCurrentUser = (data) => {
  return { type: SET_CURRENT_USER, payload: data };
};
export const setCurrentUserRole = (data) => {
  return { type: SET_CURRENT_USER_ROLE, payload: data };
};


