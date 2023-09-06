import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SearchResults from '../SearchResults/SearchResults';
import GenderResults from '../GenderResults/GenderResults';
import RecipePage from '../RecipePage/RecipePage';

import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { handleSuccessfulLogin } from '../../actions/user';


const App = () => {

    const isOpen = useSelector((state) => state.user.isLoginFormOpen);
    const isLogged = useSelector((state) => state.user.logged);
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        // condition de sécurité s'il n'y a pas d'utilisateur connecté
        if(!user) {
            return;
        } 

        dispatch(handleSuccessfulLogin(
            user.nickname, 
            user.email, 
            user.token));
    }, []);

    return (
        <div className="app">
            <Header />
            {(isOpen && !isLogged) && <LoginForm />}
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/results/:slug' element={<SearchResults />} />
                <Route path='/:gender/:slug' element={<GenderResults />} />
                <Route path='/recipe/:idRecipe' element={<RecipePage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;
