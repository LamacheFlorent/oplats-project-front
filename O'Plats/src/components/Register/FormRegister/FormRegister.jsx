import BtnRegister from './BtnRegister/BtnRegister';
import './FormRegister.scss';

const FormRegister = () => {
    return (
        <form className="form">
            <label htmlFor="username" className="label">Username</label>
            <input type="text" id="username" name="username" required="" className="input" />
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name="email" required="" className="input" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" name="password" required="" className="input" />
            <label htmlFor="confirm-password" className="label">Confirm password</label>
            <input type="password" id="confirm-password" name="confirm-password" required="" className="input" />
            <BtnRegister />
        </form>
    )
};

export default FormRegister;