import './BtnAdd.scss';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFavoriteRecipe } from '../../../actions/recipes';

const BtnAdd = ({codeRecipe}) => {
    const dispatch = useDispatch();

    return (
        <Row className='add'>
            <Button className='btn-add' variant="succes" onClick={() => {dispatch(addFavoriteRecipe(codeRecipe)) }}>
                <i className="bi bi-suit-heart"></i>
                <span>Add</span>
            </Button>
        </Row>
    )
};

export default BtnAdd;