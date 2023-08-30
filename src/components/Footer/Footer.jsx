import './Footer.scss';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='link'>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/legals-mentions">Mentions légales</NavLink>
                <NavLink to="/faq">F.A.Q</NavLink>
            </div>
            <NavLink to="https://github.com/orgs/O-Clock-Vanadium/teams/team-7-generateur-plats-recettes/repositories">
                <i className="bi bi-github github"></i>
            </NavLink>
        </footer>
    )

};

export default Footer;