import './Element.scss';
import { NavLink } from 'react-router-dom';

const Element = ({title, params}) => {
    return(
        <li className='element'>
            <NavLink className="dropdown-item" to={"/" + params + "/" + title.toLowerCase()}>{title}</NavLink>
        </li>
    )
};

export default Element;
