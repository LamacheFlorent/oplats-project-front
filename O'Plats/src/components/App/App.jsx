import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesSection1, fetchRecipesSection2, fetchRecipesSection3 } from '../../actions/recipes';

const App = () => {

    const dispatch = useDispatch();
    const isRecipesLoaded = useSelector((state) => state.recipes.isRecipesLoaded);

    useEffect(() => {
        dispatch(fetchRecipesSection1());
      }, []);

    //   useEffect(() => {
    //     dispatch(fetchRecipesSection2());
    //   }, []);

    //   useEffect(() => {
    //     dispatch(fetchRecipesSection3());
    //   }, []);

    return(
        <div className="app">
           <Header />
           <Main />
        </div>
    )
};

export default App;
