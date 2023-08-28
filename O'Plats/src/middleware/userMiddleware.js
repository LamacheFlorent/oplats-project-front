import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_REGISTER, handleErrorConnexion, handleSuccessfulLogin, handleErrorRegister } from '../actions/user';
import { fetchFavoriteRecipes } from '../actions/recipes';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post('http://localhost:8000/api/users',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        }
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(handleSuccessfulLogin(response.data.pseudo, response.data.token));
          store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(handleErrorConnexion(true));
        });
      break;

    case SUBMIT_REGISTER:
      if (store.getState().user.password === store.getState().user.confirm_password) {
        store.dispatch(handleErrorRegister(false));
        axios.post('http://localhost:8000/api/users',
          {
            nickname: store.getState().user.nickname,
            email: store.getState().user.email,
            password: store.getState().user.password,
            confirm_password: store.getState().user.confirm_password
          }
        )
          .then((response) => {
            // console.log(response);
            store.dispatch(handleSuccessfulLogin(response.data.pseudo, response.data.token));
          })
          .catch((error) => {
            console.log(error)
          });
      } else {
        store.dispatch(handleErrorRegister(true));
      }
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;