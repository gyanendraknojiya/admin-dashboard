import { SET_ADD_POST, SET_ALL_POSTS, SET_CURRENT_USER, SET_CURRENT_USER_ROLE } from "./ActionType";


export const setCurrentUser = (data) => {
  return { type: SET_CURRENT_USER, payload: data };
};


export const setCurrentUserRole = (data) => {
  return { type: SET_CURRENT_USER_ROLE, payload: data };
};

export const setAllPosts = (data) => {
  return { type: SET_ALL_POSTS, payload: data };
};

export const addPost = (data) => {
  return { type: SET_ADD_POST, payload: data };
};