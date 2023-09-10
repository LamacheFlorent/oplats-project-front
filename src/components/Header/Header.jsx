import './Header.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import BtnConnexion from './BtnConnexion/BtnConnexion';
import InputSearch from './InputSearch/InputSearch';
import MenuBurger from './MenuBurger/MenuBurgger';

const Header = () => {
    return (
        <header className='header'>
            <div className='first-row'>
                <MenuBurger />
                <Logo />
                <Menu />
                <BtnConnexion />
            </div>
            <div className='second-row'>
                <InputSearch />
            </div>
        </header>
    )
};

export default Header;