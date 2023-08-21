import './Element.scss';
import { NavLink } from 'react-router-dom';

const Element = ({title}) => {
    return(
        <li className='element'>
            <NavLink className="dropdown-item" to="#">{title}</NavLink>
        </li>
    )
};

export default Element;
