import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, closeLoginForm, submitLogin } from '../../actions/user';
import ErrorMessage from './ErrorMessage/ErrorMessage';

const LoginForm = () => {

    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.errorConnexion);

    return (
        <div className='sign-in'>
            <button className='close-form' onClick={() => dispatch(closeLoginForm())}>
                <i className="bi bi-x-square"></i>
            </button>
            <form className="form" onSubmit={(event) => { event.preventDefault(); dispatch(submitLogin()) }}>
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter email" onChange={(event) => dispatch(changeLoginField(event.target.value, "email"))} />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Enter password" onChange={(event) => dispatch(changeLoginField(event.target.value, "password"))} />
                </div>
                <button type="submit" className="submit">
                    Sign in
                </button>
                {error && <ErrorMessage text="Email ou mot de passe invalide."/>}
                <p className="signup-link">
                    No account?
                    <Link to="/register" onClick={() => dispatch(closeLoginForm())}>Sign up</Link>
                </p>
            </form>
        </div>
    )
};

export default LoginForm;