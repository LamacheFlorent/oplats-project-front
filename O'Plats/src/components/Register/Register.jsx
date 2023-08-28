import FormRegister from './FormRegister/FormRegister';
import './Register.scss';

const Register = () => {
    return(
        <div className='register'>
            <h1 className='title'>Create Account</h1>
            <FormRegister />
        </div>
    )
};

export default Register;