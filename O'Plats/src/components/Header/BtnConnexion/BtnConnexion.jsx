import './BtnConnexion.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginForm } from '../../../actions/user';

const BtnConnexion = () => {

    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.user.logged);
    const nickname = useSelector((state) => state.user.nickname);

    return (
        <button type="button" className="btn btn-outline-secondary custom-button" onClick={() => dispatch(openLoginForm())}>
            <i className="bi bi-person-circle"></i>
            {isLogged ? `Bonjour ${nickname}` : 'Connexion'}
        </button>
    )
};

export default BtnConnexion;