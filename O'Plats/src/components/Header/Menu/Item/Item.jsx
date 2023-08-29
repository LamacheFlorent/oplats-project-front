import './Item.scss';
import Element from './Element/Element';

const Item = ({ name, elements, params }) => {
    return (
        <li className="list-inline-item mx-5 dropdown">
            <span className="dropdown-toggle" role="button" id="categorieDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{name}</span>
            <ul className="dropdown-menu">
                {elements && elements.map((element, index) => {
                    return (<Element key={index} title={element} params={params} />)
                })}
            </ul>
        </li>
    )
};

export default Item;