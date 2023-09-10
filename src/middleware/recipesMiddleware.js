import axios from 'axios';

import {
  FETCH_RECIPES_SECTION1,
  FETCH_RECIPES_SECTION2,
  FETCH_RECIPES_SECTION3,
  FETCH_RECIPES_SEARCH,
  FETCH_FAVORITE_RECIPES,
  saveFavoriteRecipes,
  saveRecipes,
  FETCH_RECIPES_GENDER,
  ADD_FAVORITE_RECIPE,
  REMOVE_FAVORITE_RECIPE,
  ADD_REVIEW,
  fetchFavoriteRecipes,
  FETCH_REVIEWS,
  saveReviews,
  fetchReviews
} from '../actions/recipes';

const APIkey = 'b7dc8a490af6435f8132de0a24dfcd71';
const baseUrl = 'https://api.spoonacular.com/recipes/';
const baseUrlBDD = 'http://benjaminp17-server.eddi.cloud/projet-7-generateur-plats-recettes-back/public/api';

const nameSection1 = "cocktails";
const nameSection2 = "salad";
const nameSection3 = "summer";

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES_SECTION1:
      axios
        .get(`${baseUrl}complexSearch?query=${nameSection1}&number=3&apiKey=${APIkey}`)
        .then((response) => {
          // console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'section1'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // case FETCH_RECIPES_SECTION2:
    //   axios
    //     .get(`${baseUrl}complexSearch?query=${nameSection2}&number=3&apiKey=${APIkey}`)
    //     .then((response) => {
    //       console.log(response.data.results);
    //       store.dispatch(saveRecipes(response.data.results, 'section2'));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;

    // case FETCH_RECIPES_SECTION3:
    //   axios
    //     .get(`${baseUrl}complexSearch?query=${nameSection3}&number=3&apiKey=${APIkey}`)
    //     .then((response) => {
    //       // console.log(response.data.results);
    //       store.dispatch(saveRecipes(response.data.results, 'section3'));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;

    case FETCH_RECIPES_SEARCH:
      axios
        .get(`${baseUrl}complexSearch?query=${action.value}&number=100&apiKey=${APIkey}`)
        .then((response) => {
          // console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'searchResults'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_RECIPES_GENDER:
      axios
        .get(`${baseUrl}complexSearch?${action.gender}=${action.value}&number=100&apiKey=${APIkey}`)
        .then((response) => {
          // console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'searchResults'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case ADD_FAVORITE_RECIPE:
      axios
        .get(`${baseUrlBDD}/favorites/add/${action.idRecipe}`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then((response) => {
          // console.log('Ajout en favoris réussi ', response);
          store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);
          // console.log(store.getState().user.token)
        });
      break;

    case FETCH_FAVORITE_RECIPES:
      axios
        .get(`${baseUrlBDD}/users/me/favorites`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then((response) => {
          // console.log('Liste des favoris bien récupéré', response.data);
          store.dispatch(saveFavoriteRecipes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case REMOVE_FAVORITE_RECIPE:
      axios
        .delete(`${baseUrlBDD}/users/me/favorites/remove/${action.idRecipe}`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then((response) => {
          // console.log('La recette a bien été supprimée', response);
          store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case ADD_REVIEW:
      axios
        .post(`${baseUrlBDD}/reviews/add`,
          {
            comment: store.getState().recipes.inputComment,
            note: parseInt(store.getState().recipes.valueRate, 10),
            code_api: action.idRecipe
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then((response) => {
          console.log('Review bien ajoutée', response);
          store.dispatch(fetchReviews(action.idRecipe))
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // case FETCH_REVIEWS:
    //   axios
    //     .get(`${baseUrlBDD}/reviews/${action.idRecipe}`)
    //     .then((response) => {
    //       console.log('Récupération des reviews OK', response);
    //       store.dispatch(saveReviews(response));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default recipesMiddleware;