import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SearchResults from '../SearchResults/SearchResults';
import GenderResults from '../GenderResults/GenderResults';

import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = () => {

    const isOpen = useSelector((state) => state.user.isLoginFormOpen);
    const isLogged = useSelector((state) => state.user.logged);

    return (
        <div className="app">
            <Header />
            {(isOpen && !isLogged) && <LoginForm />}
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/results/:slug' element={<SearchResults />} />
                <Route path='/:gender/:slug' element={<GenderResults />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;
