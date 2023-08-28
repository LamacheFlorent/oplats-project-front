import { changeLoginField } from '../../../../actions/user';
import './InputRegister.scss';
import { useDispatch } from 'react-redux';

const InputRegister = ({inputType, labelText, name, placeholder}) => {
    const dispatch = useDispatch();

    return (
        <section className='field-register'>
            <label htmlFor={name} className="label">{labelText}</label>
            <input type={inputType} id={name} name={name} className="input" placeholder={placeholder} onChange={(event) => dispatch(changeLoginField(event.target.value, name))}/>
        </section>
    )
};

export default InputRegister;