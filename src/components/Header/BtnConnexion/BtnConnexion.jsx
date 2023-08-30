import './BtnConnexion.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginForm } from '../../../actions/user';
import Button from 'react-bootstrap/Button';

const BtnConnexion = () => {

    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.user.logged);
    const nickname = useSelector((state) => state.user.nickname);

    return (
        <Button variant="light" type="button" className='button-co' onClick={() => dispatch(openLoginForm())}>
            <i className="bi bi-person-circle"></i>
            <span>{isLogged ? `Bonjour ${nickname}` : 'Connexion'}</span>
        </Button>
    )
};

export default BtnConnexion;