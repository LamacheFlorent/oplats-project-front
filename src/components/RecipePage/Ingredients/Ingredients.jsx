import './Ingredients.scss';
import Col from 'react-bootstrap/Col';

const Ingredients = ({ingredients}) => {
    return (
        <Col className='ingredients'>
            <h2>Ingredients</h2> <br></br>
            <ul className='list-ingredients'>
                {ingredients.map((ingredient, index) => {
                    return(
                        <li key={index}><span>Ingredient {index + 1} :</span> {ingredient.original}</li>
                    )
                })}
            </ul>
        </Col>
    )
};

export default Ingredients;