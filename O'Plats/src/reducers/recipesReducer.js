import { CHANGE_SEARCH_INPUT, SAVE_RECIPES, SAVE_FAVORITE_RECIPES } from '../actions/recipes';

export const initialState = {
  inputSearch: '',
  section1: [],
  section2: [],
  section3: [],
  searchResults: [],
  isRecipesLoaded: false,
  favorites: [],
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
        favorites: action.favoriteRecipes,
      };

    default:
      return state;
  }
};

export default recipesReducer;