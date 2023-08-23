import axios from 'axios';
import { SUBMIT_LOGIN, handleSuccessfulLogin } from '../actions/user';
// import { fetchFavoriteRecipes } from '../actions/recipes';

const baseUrl = '';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(`${baseUrl}/login`,
          {
            email: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // console.log(response);
          store.dispatch(
            handleSuccessfulLogin(response.data.pseudo, response.data.token)
          );
          // store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;