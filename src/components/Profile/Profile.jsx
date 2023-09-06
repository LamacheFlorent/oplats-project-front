import './Profile.scss';
import Button from 'react-bootstrap/Button';
import Informations from './Informations/Informations';
import Favorites from './Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../actions/user';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='profile-page'>
            <h1>Mon Profil</h1>
            <Informations />
            <Button className='logout' variant="success" onClick={() => {dispatch(logOut()); navigate('/')}}>Deconnexion</Button>
            <Favorites />
        </div>
    )
};

export default Profile;