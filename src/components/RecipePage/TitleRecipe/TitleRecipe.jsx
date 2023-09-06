import './TitleRecipe.scss';
import Row from 'react-bootstrap/Row';

const TitleRecipe = ({text}) => {
    return (
        <Row className='title'>
            <h1 className='title-recipe'>
                {text}
            </h1>
        </Row>
    )
};

export default TitleRecipe;