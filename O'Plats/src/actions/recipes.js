export const FETCH_RECIPES_SECTION1 = 'FETCH_RECIPES_SECTION1';
export const FETCH_RECIPES_SECTION2 = 'FETCH_RECIPES_SECTION2';
export const FETCH_RECIPES_SECTION3 = 'FETCH_RECIPES_SECTION3';
export const FETCH_RECIPES_SEARCH = 'FETCH_RECIPES_SEARCH';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';

export const fetchRecipesSection1 = () => ({
    type: FETCH_RECIPES_SECTION1
  });

  export const fetchRecipesSection2 = () => ({
    type: FETCH_RECIPES_SECTION2
  });
  
  export const fetchRecipesSection3 = () => ({
    type: FETCH_RECIPES_SECTION3
  });

  export const fetchRecipesSearch = () => ({
    type: FETCH_RECIPES_SEARCH
  });

  export const saveRecipes = (recipes, identifier) => ({
    type: SAVE_RECIPES,
    recipes,
    identifier
  });

  export const changeSearchInput = (newValue) => ({
    type: CHANGE_SEARCH_INPUT,
    newValue
  });