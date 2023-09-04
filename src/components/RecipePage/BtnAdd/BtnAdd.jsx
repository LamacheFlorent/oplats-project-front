import './BtnAdd.scss';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFavoriteRecipe } from '../../../actions/recipes';

const BtnAdd = ({idRecipe}) => {
    const dispatch = useDispatch();

    return (
        <Row className='add'>
            <Button className='btn-add' variant="danger" onClick={() => { dispatch(addFavoriteRecipe(idRecipe)) }}>
                <i className="bi bi-suit-heart"></i>
                <span>Add</span>
            </Button>
        </Row>
    )
};

export default BtnAdd;