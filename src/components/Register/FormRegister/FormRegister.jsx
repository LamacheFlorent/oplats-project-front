import { submitRegister } from '../../../actions/user';
import ErrorMessage from '../../LoginForm/ErrorMessage/ErrorMessage';
import BtnRegister from './BtnRegister/BtnRegister';
import './FormRegister.scss';
import InputRegister from './InputRegister/InputRegister';
import { useDispatch, useSelector } from 'react-redux';

const FormRegister = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.errorRegister);

    return (
        <form className="form" onSubmit={(event) => {event.preventDefault(); dispatch(submitRegister())}}>
            <InputRegister inputType="text" labelText="Username" name="nickname"/>
            <InputRegister inputType="email" labelText="Email" name="email"/>
            <InputRegister inputType="password" labelText="Password" name="password" placeholder="minimum 8 characters"/>
            <InputRegister inputType="password" labelText="Confirm password" name="confirm_password" placeholder="minimum 8 characters"/>
            {error && <ErrorMessage text="Password and confirm password do not match"/>}
            <BtnRegister />
        </form>
    )
};

export default FormRegister;