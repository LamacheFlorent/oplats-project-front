import './Logo.scss';
import logo from '../../../assets/img/logo_oplats.png';

const Logo = () => {
    return(
        <div className="logo">
            <img src={logo} alt="logo-oplats" className="img-fluid"></img>
        </div> 
    )
};

export default Logo;