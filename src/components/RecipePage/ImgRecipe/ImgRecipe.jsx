import './ImgRecipe.scss';
import Row from 'react-bootstrap/Row';

const ImgRecipe = () => {
    return(
        <Row className='img-recipe'>
            <img src='https://spoonacular.com/recipeImages/656329-312x231.jpg' alt='img-recipe' />
        </Row>
    )
};

export default ImgRecipe;