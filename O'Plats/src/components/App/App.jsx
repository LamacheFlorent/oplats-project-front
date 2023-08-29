import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import Results from '../Results/Results';
import Profile from '../Profile/Profile';
import Loader from '../Loader/Loader';
import Register from '../Register/Register';

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesSection1, fetchRecipesSection2, fetchRecipesSection3, fetchRecipesGender } from '../../actions/recipes';


const App = () => {

    const dispatch = useDispatch();
    const isRecipesLoaded = useSelector((state) => state.recipes.isRecipesLoaded);
    const isOpen = useSelector((state) => state.user.isLoginFormOpen);
    const isLogged = useSelector((state) => state.user.logged);

    // useEffect(() => {
    //     dispatch(fetchRecipesSection1());
    //   }, []);

    //   useEffect(() => {
    //     dispatch(fetchRecipesSection2());
    //   }, []);

    //   useEffect(() => {
    //     dispatch(fetchRecipesSection3());
    //   }, []);


    return (
        <div className="app">
            <Header />
            {(isOpen && !isLogged) && <LoginForm />}
            {/* {!isRecipesLoaded && <Loader />} */}
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/results/:slug' element={<Results />} />
                <Route path='/:gender/:slug' element={<Results />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;
