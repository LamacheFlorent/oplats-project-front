import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  OPEN_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
  LOGOUT,
  HANDLE_ERROR_CONNEXION,
  HANDLE_SUCCESSFUL_REGISTER,
  HANDLE_ERROR_REGISTER
} from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  confirm_password: '',
  nickname: '',
  token: '',
  isLoginFormOpen: false,
  errorConnexion: false,
  errorRegister: false
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue
      };

    case HANDLE_SUCCESSFUL_LOGIN:

      // ajout dans le local storage pour pouvoir récupérer les infos au rechargement de la page
      localStorage.setItem('user', JSON.stringify({
        nickname: action.nickname,
        email: action.email,
        token: action.token 
      }));

      
      return {
        ...state,
        logged: true,
        nickname: action.nickname,
        token: action.token,
        email: action.email
      };

    case OPEN_LOGIN_FORM:
      return {
        ...state,
        isLoginFormOpen: true
      };

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        isLoginFormOpen: false,
        errorConnexion: false
      };

    case LOGOUT:
      localStorage.removeItem('user');

      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        nickname: '',
        token: ''
      };

    case HANDLE_ERROR_CONNEXION:
      return {
        ...state,
        errorConnexion: action.error
      };

    case HANDLE_SUCCESSFUL_REGISTER:
      return {
        ...state,
        isLoginFormOpen: true
      }

    case HANDLE_ERROR_REGISTER:
      return {
        ...state,
        errorRegister: action.error
      };

    default:
      return state;
  }
};

export default userReducer;