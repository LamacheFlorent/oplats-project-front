import './Profile.scss';
import Button from 'react-bootstrap/Button';
import Informations from './Informations/Informations';
import Favorites from './Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../actions/user';
import { useEffect } from 'react';
import { fetchFavoriteRecipes } from '../../actions/recipes';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     dispatch(fetchFavoriteRecipes())
    // }, [])

    return (
        <div className='profile-page'>
            <h1>My Profile</h1>
            <Informations />
            <Button className='logout' variant="success" onClick={() => {dispatch(logOut()); navigate('/')}}>Deconnexion</Button>
            <Favorites />
        </div>
    )
};

export default Profile;