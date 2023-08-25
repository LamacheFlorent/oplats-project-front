import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, closeLoginForm, submitLogin } from '../../actions/user';

const LoginForm = () => {

    const dispatch = useDispatch();
    // const isOpen = useSelector((state) => state.user.isLoginFormOpen);

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

                <p className="signup-link">
                    No account?
                    <Link to="/register" href="">Sign up</Link>
                </p>
            </form>
        </div>
    )
};

export default LoginForm;