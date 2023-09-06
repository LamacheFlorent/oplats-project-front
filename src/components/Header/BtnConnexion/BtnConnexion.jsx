import './BtnConnexion.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openLoginForm } from '../../../actions/user';
import Button from 'react-bootstrap/Button';

const BtnConnexion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector((state) => state.user.logged);
    const nickname = useSelector((state) => state.user.nickname);

    // on assigne 2 fonctionnalités possibles au bouton, si déconnecté on ouvre le formulaire, si connecté on va vers la page de profil
    const handleButtonClick = () => {
        if (isLogged) {
            navigate('/profile');
        } else {
            dispatch(openLoginForm());
        }
    };

    return (
        <Button variant="light" type="button" className='button-co' onClick={handleButtonClick}>
            <i className="bi bi-person-circle"></i>
            <span>{isLogged ? `Bonjour ${nickname}` : 'Connexion'}</span>
        </Button>
    )
};

export default BtnConnexion;