import { NavLink } from 'react-router-dom';
import './BtnConnexion.scss';

const BtnConnexion = () => {
    return (
        <div className='connexion'>
            <NavLink className="btn btn-custom icon-button" to="#" role="button">
                <i className="bi bi-person-circle"></i>
                <span className="icon-text">Connexion</span>
                </NavLink>
        </div>
    )
};

export default BtnConnexion;