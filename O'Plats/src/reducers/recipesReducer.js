import { CHANGE_SEARCH_INPUT, SAVE_RECIPES } from '../actions/recipes';

export const initialState = {
  inputSearch: '',
  section1: [],
  section2: [],
  section3: [],
  searchResults: [],
  isRecipesLoaded: false,
  };
  
  const recipesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_RECIPES:
      return {
        ...state,
        [action.identifier]: action.recipes,
        // searchResults: action.recipes,
        isRecipesLoaded: true
      };

      case CHANGE_SEARCH_INPUT:
        return {
          ...state,
          inputSearch: action.newValue
        }

      default:
        return state;
    }
  };
  
  export default recipesReducer;