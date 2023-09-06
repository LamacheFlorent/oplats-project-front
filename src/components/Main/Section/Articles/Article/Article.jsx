import './Article.scss';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addFavoriteRecipe } from '../../../../../actions/recipes';
import { Link } from 'react-router-dom';

const Article = ({ img, title, idRecipe }) => {
    const dispatch = useDispatch();

    return (
        <Link to={`/recipe/${idRecipe}`}>
            <article className='card'>
                <img src={img} alt='img-recipe' />
                <div className="card__content">
                    <Button variant="light" className='button-like' onClick={() => { dispatch(addFavoriteRecipe(idRecipe)) }}>
                        <i className="bi bi-suit-heart"></i>
                    </Button>
                    <p className="card__title">{title}</p>
                    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </article>
        </Link>
    )
};

export default Article;