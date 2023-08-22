import { SAVE_RECIPES } from '../actions/recipes';

export const initialState = {
  dataRecipes: [],
  section1: [],
  section2: [],
  section3: [],
  isRecipesLoaded: false,
  };
  
  const recipesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_RECIPES:
      return {
        ...state,
        section1: action.recipes,
        isRecipesLoaded: true
      };

      default:
        return state;
    }
  };
  
  export default recipesReducer;