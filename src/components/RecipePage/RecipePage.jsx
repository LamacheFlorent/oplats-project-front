import Details from './Details/Details';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ImgRecipe from './ImgRecipe/ImgRecipe';
import Ingredients from './Ingredients/Ingredients';
import Prepare from './Prepare/Prepare';
import './RecipePage.scss';
import TitleRecipe from './TitleRecipe/TitleRecipe';
import BtnAdd from './BtnAdd/BtnAdd';
import Reviews from './Reviews/Reviews';

const RecipePage = () => {
    return (
        <Container fluid className='recipe-page'>
            <TitleRecipe />
            <ImgRecipe />
            <Details />
            <BtnAdd />
            <Row className='description'>
                <Ingredients />
                <Prepare />
            </Row>
            <Reviews />
        </Container>
    )
};

export default RecipePage;