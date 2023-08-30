import './Element.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRecipesGender } from '../../../../../actions/recipes';

const Element = ({title, params}) => {
    const dispatch = useDispatch();

    return(
        <li className='element'>
            <NavLink className="dropdown-item" to={"/" + params + "/" + title.toLowerCase()} onClick={() => dispatch(fetchRecipesGender(params, title))}>{title}</NavLink>
        </li>
    )
};

export default Element;
