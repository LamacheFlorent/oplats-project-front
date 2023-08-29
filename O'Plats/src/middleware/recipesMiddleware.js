import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  FETCH_RECIPES_SECTION1,
  FETCH_RECIPES_SECTION2,
  FETCH_RECIPES_SECTION3,
  FETCH_RECIPES_SEARCH,
  FETCH_FAVORITE_RECIPES,
  saveRecipes,
  FETCH_RECIPES_GENDER,
} from '../actions/recipes';

const APIkey = 'b7dc8a490af6435f8132de0a24dfcd71';
const baseUrl = 'https://api.spoonacular.com/recipes/';

const nameSection1 = "cocktails";
const nameSection2 = "salad";
const nameSection3 = "summer";

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES_SECTION1:
      axios
        .get(`${baseUrl}complexSearch?query=${nameSection1}&number=100&apiKey=${APIkey}`)
        .then((response) => {
          console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'section1'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_RECIPES_SECTION2:
      axios
        .get(`${baseUrl}complexSearch?query=${nameSection2}&number=100&apiKey=${APIkey}`)
        .then((response) => {
          console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'section2'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_RECIPES_SECTION3:
      axios
        .get(`${baseUrl}complexSearch?query=${nameSection3}&number=10&apiKey=${APIkey}`)
        .then((response) => {
          console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'section3'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_RECIPES_SEARCH:
      axios
        .get(`${baseUrl}complexSearch?query=${store.getState().recipes.inputSearch}&number=100&apiKey=${APIkey}`)
        .then((response) => {
          console.log(response.data.results);
          store.dispatch(saveRecipes(response.data.results, 'searchResults'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_RECIPES_GENDER:
      const { gender, value } = action
      axios
      .get(`${baseUrl}complexSearch?${gender}=${value}&number=100&apiKey=${APIkey}`)
      .then((response) => {
        console.log(response.data.results);
        store.dispatch(saveRecipes(response.data.results, 'searchResults'));
      })
      .catch((error) => {
        console.log(error);
      });
    break;

    // case FETCH_FAVORITE_RECIPES:
    //   axios.get('',
    //     {
    //       headers: {
    //         // nom du header: valeur
    //         Authorization: `Bearer ${store.getState().user.token}`,
    //       },
    //     }
    //   )
    //     .then((response) => {
    //       // console.log(response);
    //       store.dispatch(saveFavoriteRecipes(response.data.favorites));
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