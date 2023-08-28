export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const HANDLE_ERROR_CONNEXION = 'HANDLE_ERROR_CONNEXION';
export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
export const CLOSE_LOGIN_FORM = 'CLOSE_LOGIN_FORM';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const HANDLE_ERROR_REGISTER = 'HANDLE_ERROR_REGISTER';

// fonction que l'on trouve dans onChange pour récupérer la valeur de l'input en précisant l'identifiant qu'elle attend
export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  identifier,
});

// fonction qui envoie en post les identifiants de l'utilisateur à la bdd pour l'authentification
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

// fonction activée si l'authentification a réussi et récupère le pseudo et le token jwt de l'utilisateur connecté
export const handleSuccessfulLogin = (nickname, token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  nickname,
  token,
});

export const openLoginForm = () => ({
  type: OPEN_LOGIN_FORM
});

export const closeLoginForm = () => ({
  type: CLOSE_LOGIN_FORM
});

export const logOut = () => ({
  type: LOGOUT
});

// fonction qui gère si une erreur de connexion et vraie ou non selon certains critères d'authentification 
export const handleErrorConnexion = (error) => ({
  type: HANDLE_ERROR_CONNEXION,
  error
});

// fonction qui envoie en post les informations de l'utilisateur à la bdd pour l'inscription
export const submitRegister = () => ({
  type: SUBMIT_REGISTER
});

// fonction qui gère si une erreur de d'inscription et vraie ou non selon certains critères d'authentification
export const handleErrorRegister = (error) => ({
  type: HANDLE_ERROR_REGISTER,
  error
});