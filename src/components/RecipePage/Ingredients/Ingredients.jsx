import './Ingredients.scss';
import Col from 'react-bootstrap/Col';

const Ingredients = () => {
    return (
        <Col className='ingredients'>
            <h2>Ingredients</h2> <br></br>
            <ul className='list-ingredients'>
                <li>Ingredient 1</li> <br></br>
                <li>Ingredient 2</li> <br></br>
                <li>Ingredient 3</li> <br></br>
                <li>Ingredient 4</li> <br></br>
                <li>Ingredient 5</li> <br></br>
            </ul>
        </Col>
    )
};

export default Ingredients;