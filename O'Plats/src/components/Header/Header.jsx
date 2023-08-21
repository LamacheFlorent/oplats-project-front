import './Header.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import BtnConnexion from './BtnConnexion/BtnConnexion';


const Header = () => {
    return (
        <header className="header d-flex justify-content-between align-items-center">
            <Logo />
            <Menu />
            <BtnConnexion />
        </header>
    )
};

export default Header;