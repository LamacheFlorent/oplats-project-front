import './ImgRecipe.scss';
import Row from 'react-bootstrap/Row';

const ImgRecipe = ({src}) => {
    return(
        <Row className='img-recipe'>
            <img src={src} alt='img-recipe' />
        </Row>
    )
};

export default ImgRecipe;