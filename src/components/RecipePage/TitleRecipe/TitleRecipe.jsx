import './TitleRecipe.scss';
import Row from 'react-bootstrap/Row';

const TitleRecipe = () => {
    return (
        <Row className='title'>
            <h1 className='title-recipe'>
                Nom de la recette
            </h1>
        </Row>
    )
};

export default TitleRecipe;