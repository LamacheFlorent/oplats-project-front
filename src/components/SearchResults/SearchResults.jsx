import Results from "../Results/Results";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchRecipesSearch } from "../../actions/recipes";
import Loader from '../Loader/Loader';

const SearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesSearch(params.slug));
  }, [params]);

  const resultName = useSelector((state) => state.recipes.inputSearch);
  const searchResults = useSelector((state) => state.recipes.searchResults);

  return <Results data={searchResults} title={`Résultats correspondant à la recherche ${resultName} :`}/>
};

export default SearchResults;