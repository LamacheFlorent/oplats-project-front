import axios from 'axios';
import {
  FETCH_RECIPES_SECTION1,
  FETCH_RECIPES_SECTION2,
  FETCH_RECIPES_SECTION3,
  saveRecipes,
} from '../actions/recipes';

const APIkey = 'b7dc8a490af6435f8132de0a24dfcd71';
const baseUrl = 'https://api.spoonacular.com/recipes/';

const section1 = "cocktails";
const section2 = "random";
const section3 = "summer";

const recipesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case FETCH_RECIPES_SECTION1:
        axios
          .get(`${baseUrl}complexSearch?query=${section1}&apiKey=${APIkey}`)
          .then((response) => {
            console.log(response.data.results);
            store.dispatch(saveRecipes(response.data.results));
          })
          .catch((error) => {
            console.log(error);
          });
        break;

        // case FETCH_RECIPES_SECTION2:
        //   axios
        //     .get(`${baseUrl}${section2}&apiKey=${APIkey}`)
        //     .then((response) => {
        //       console.log(response.data.results);
        //       store.dispatch(saveRecipes(response.data.results));
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        //   break;

        //   case FETCH_RECIPES_SECTION3:
        //     axios
        //       .get(`${baseUrl}complexSearch?query=${section3}&apiKey=${APIkey}`)
        //       .then((response) => {
        //         console.log(response.data.results);
        //         store.dispatch(saveRecipes(response.data.results));
        //       })
        //       .catch((error) => {
        //         console.log(error);
        //       });
        //     break;

      default:
    }
  
    // on passe l'action au suivant (middleware suivant ou reducer)
    next(action);
  };
  
  export default recipesMiddleware;