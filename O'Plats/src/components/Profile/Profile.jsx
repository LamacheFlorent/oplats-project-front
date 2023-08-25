import './Profile.scss';
import Button from 'react-bootstrap/Button';
import Informations from './Informations/Informations';
import Favorites from './Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { logOut } from '../../actions/user';

const Profile = () => {
    const dispatch = useDispatch();

    return (
        <div className='profile-page'>
            <h1>Mon Profil</h1>
            <Informations />
            <Button className='logout' onClick={() => dispatch(logOut())}>Deconnexion</Button>
            <Favorites />
        </div>
    )
};

export default Profile;