import './Logo.scss';
import logo from '../../../assets/img/logo_oplats.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/">
                <img src={logo} alt="logo-oplats" className="img-fluid"></img>
            </NavLink>
        </div>
    )
};

export default Logo;