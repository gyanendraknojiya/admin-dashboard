import { SET_ADD_POST, SET_ALL_POSTS, SET_CURRENT_USER, SET_CURRENT_USER_ROLE, } from "./ActionType";

const INITIAL_STATE = {
  currentUser: null,
  currentUserRole: null, //admin:1, user:2
  allPosts:[]
};

export const rootReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.payload,
    };
  } if (action.type === SET_CURRENT_USER_ROLE) {
    return {
      ...state,
      currentUserRole: action.payload,
    };
  } if (action.type === SET_ALL_POSTS) {
    return {
      ...state,
      allPosts: action.payload,
    };
  }
  if (action.type === SET_ADD_POST) {
    return {
      ...state,
      allPosts: [...state.allPosts, action.payload],
    };
  }
   else {
    return {
      ...state,
    };
  }
};
