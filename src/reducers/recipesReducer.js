import { CHANGE_SEARCH_INPUT, SAVE_RECIPES, SAVE_FAVORITE_RECIPES, CHANGE_COMMENT_INPUT, ADD_FAVORITE_RECIPE } from '../actions/recipes';

export const initialState = {
  inputSearch: '',
  section1: [],
  section2: [],
  section3: [],
  searchResults: [],
  isRecipesLoaded: false,
  favoritesBDD: [],
  inputComment: '',
  addedInFavorites: false,
};

const recipesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        [action.identifier]: action.recipes,
        isRecipesLoaded: true
      };

    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        inputSearch: action.newValue
      };

    case SAVE_FAVORITE_RECIPES:
      return {
        ...state,
        favoritesBDD: action.favoriteRecipes
      };

    case CHANGE_COMMENT_INPUT: 
      return {
        ...state,
        inputComment: action.newValue
      };

    default:
      return state;
  }
};

export default recipesReducer;