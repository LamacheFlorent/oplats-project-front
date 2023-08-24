import './Header.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import BtnConnexion from './BtnConnexion/BtnConnexion';
import InputSearch from './InputSearch/InputSearch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {
    return (
        <header className="header d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center hearder-countainer">
                <Logo />
                <Menu />
                <BtnConnexion />
            </div>
            <InputSearch />
        </header>
    )
};

export default Header;