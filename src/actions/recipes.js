export const FETCH_RECIPES_SECTION1 = 'FETCH_RECIPES_SECTION1';
export const FETCH_RECIPES_SECTION2 = 'FETCH_RECIPES_SECTION2';
export const FETCH_RECIPES_SECTION3 = 'FETCH_RECIPES_SECTION3';
export const FETCH_RECIPES_SEARCH = 'FETCH_RECIPES_SEARCH';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';
export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';
export const SAVE_FAVORITE_RECIPES = 'SAVE_FAVORITE_RECIPES';
export const FETCH_RECIPES_GENDER = 'FETCH_RECIPES_GENDER';
export const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE';
export const REMOVE_FAVORITE_RECIPE = 'REMOVE_FAVORITE_RECIPE';
export const CHANGE_COMMENT_INPUT = 'CHANGE_COMMENT_INPUT';
export const ADD_REVIEW = 'ADD_REVIEW';

// fonctions (sections 1 2 3) qui fetch les recettes de l'api par 3 en fonctions des endpoint pour s'afficher dans le HomePage
export const fetchRecipesSection1 = () => ({
  type: FETCH_RECIPES_SECTION1
});

export const fetchRecipesSection2 = () => ({
  type: FETCH_RECIPES_SECTION2
});

export const fetchRecipesSection3 = () => ({
  type: FETCH_RECIPES_SECTION3
});

//fonction qui fetch les recettes de l'api suite à une recherche dans l'input du formulaire de recherche (avec mot un clé)
// ou en faisant "voir plus" pour les recettes proposées dans les sections
export const fetchRecipesSearch = (value) => ({
  type: FETCH_RECIPES_SEARCH,
  value
});

// fonction qui fetch les recettes de l'api selon certains critères (genre = item de la navbare, value = link cliqué)
export const fetchRecipesGender = (gender, value) => ({
  type: FETCH_RECIPES_GENDER,
  gender,
  value
});

// fonction qui récupère les recettes (response.data.results) après le fetch selon un identifiant (appelé dans les fonctions fetch)
export const saveRecipes = (recipes, identifier) => ({
  type: SAVE_RECIPES,
  recipes,
  identifier
});

// fonction qui répond au onChange de l'input et récupère la nouvelle valeur rentrée par l'utilisateur
export const changeSearchInput = (newValue) => ({
  type: CHANGE_SEARCH_INPUT,
  newValue
});

// fonction qui fetch les recettes favotites de l'utilisateur connecté depuis la BDD 
export const fetchFavoriteRecipes = () => ({
  type: FETCH_FAVORITE_RECIPES,
});

// fonction qui récupère les recettes favotites de l'utilisateur connecté par son code api (id de la recette)
export const saveFavoriteRecipes = (favoriteRecipes) => ({
  type: SAVE_FAVORITE_RECIPES,
  favoriteRecipes
});

// fonction qui permet d'ajouter une recette dans la liste de favoris
export const addFavoriteRecipe = (idRecipe) => ({
  type: ADD_FAVORITE_RECIPE,
  idRecipe
});

// supprime une recette des favoris
export const removeFavoriteRecipe = (idRecipe) => ({
  type: REMOVE_FAVORITE_RECIPE,
  idRecipe
});

// fonction qui répond au onChange de l'input et récupère la nouvelle valeur rentrée par l'utilisateur
export const changeCommentInput = (newValue) => ({
  type: CHANGE_COMMENT_INPUT,
  newValue
});

export const addReview = () => ({
  type: ADD_REVIEW
});
