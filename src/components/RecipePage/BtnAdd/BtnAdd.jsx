import './BtnAdd.scss';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../../../actions/recipes';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BtnAdd = ({ codeRecipe }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favoritesBDD = useSelector((state) => state.recipes.favoritesBDD)
    const [idAddedInFav, setIdAddedInFav] = useState(false);

    useEffect(() => {
        if (favoritesBDD.some((fav) => fav.codeApi === parseInt(codeRecipe))) {
            setIdAddedInFav(true);
        } else {
            setIdAddedInFav(false);
        }
    }, [favoritesBDD, codeRecipe]);

    if (idAddedInFav === true) {
        return (
            <Row className='remove'>
                <Button className='btn-remove' variant="danger" onClick={() => { dispatch(removeFavoriteRecipe(codeRecipe)); navigate(`/recipe/${codeRecipe}`); }}>
                    <i className="bi bi-x-lg"></i>
                    <span>Remove</span>
                </Button>
            </Row>
        )
    }

    return (
        <Row className='add'>
            <Button className='btn-add' variant="succes" onClick={() => { dispatch(addFavoriteRecipe(codeRecipe)); navigate(`/recipe/${codeRecipe}`); }}>
                <i className="bi bi-suit-heart"></i>
                <span>Add</span>
            </Button>
        </Row>
    )
};

export default BtnAdd;