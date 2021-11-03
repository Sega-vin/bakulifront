import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGUOT, USER_REGISTRATION, LOAD_USER, LOAD_TOKEN,ACCEPTED, USER_DETAIL } from "../types"
import * as SecureStore from 'expo-secure-store';


const initialState = {
  isAuth: false,
  user: null,
  detail: {
    history: []
  },
  token: null,
  accept: false
}
 
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: return {
      ...state,
      isAuth: true,
      user: action.payload.user,
      token: action.payload.token,
    }
    case LOAD_TOKEN: return {
      ...state,
      isAuth: true,
      token: action.payload.token,
    }
    case LOAD_USER: return {
      ...state,
      user: action.payload,
    }
    case USER_DETAIL: return {
      ...state,
      detail: action.payload
    }
    case USER_REGISTRATION: return {
      ...state,
      user: action.payload,
      registration: true
    }
    case USER_LOGUOT: return {
      ...state,
      isAuth: false,
      user: null,
      token: null,
      registration: false
    }
    case USER_LOGIN_FAILED: return {
      ...state,
      isAuth: false,
      user: null,
      token: null,
      info: action.payload
    }
    case ACCEPTED: return {
      ...state,
      accept: true
    }
    default: return state
  }
  return state
}