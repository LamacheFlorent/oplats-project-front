import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLoginField } from '../../actions/user';

const SignIn = () => {

    const dispatch = useDispatch();

    return (
        <div className='sign-in'>
            <form className="form">
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter email" onChange={(event) => dispatch(changeLoginField(event.target.value, "email"))}/>
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

export default SignIn;