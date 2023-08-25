import { CHANGE_LOGIN_FIELD, HANDLE_SUCCESSFUL_LOGIN, OPEN_LOGIN_FORM, LOGOUT, CLOSE_LOGIN_FORM } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
  isLoginFormOpen: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue
      };

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        logged: true,
        nickname: action.nickname,
        token: action.token,
        email: '',
        password: '',
      };

    case OPEN_LOGIN_FORM:
      return {
        ...state,
        isLoginFormOpen: true
      };

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        isLoginFormOpen: false
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        nickname: '',
        token: ''
      }

    default:
      return state;
  }
};

export default userReducer;