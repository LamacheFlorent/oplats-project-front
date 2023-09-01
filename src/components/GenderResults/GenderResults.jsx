import Results from "../Results/Results";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchRecipesGender } from "../../actions/recipes";

const GenderResults = () => {
  // useParam qui permet de récupérer le genre en cours et la valeur (cuisine => asian) dans l'url
  const params = useParams();

  const dispatch = useDispatch();

  // useEffect qui permet de dispatch la récupération des bonnes recettes (déclenché au changement de params)
  useEffect(() => {
    dispatch(fetchRecipesGender(params.gender, params.slug))
  }, [params]);

  // useSelector pour récupérer ces recettes depuis le store et les afficher
  const resultName = useSelector((state) => state.recipes.inputSearch);
  const searchResults = useSelector((state) => state.recipes.searchResults);

  return <Results data={searchResults} title={`Résultats correspondant à la recherche ${resultName} :`}/>
};

export default GenderResults;