export const FETCH_RECIPES_SECTION1 = 'FETCH_RECIPES_SECTION1';
export const FETCH_RECIPES_SECTION2 = 'FETCH_RECIPES_SECTION2';
export const FETCH_RECIPES_SECTION3 = 'FETCH_RECIPES_SECTION3';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export const fetchRecipesSection1 = () => ({
    type: FETCH_RECIPES_SECTION1,
  });

  export const fetchRecipesSection2 = () => ({
    type: FETCH_RECIPES_SECTION2,
  });
  
  export const fetchRecipesSection3 = () => ({
    type: FETCH_RECIPES_SECTION3,
  });

  export const saveRecipes = (recipes) => ({
    type: SAVE_RECIPES,
    recipes
  });