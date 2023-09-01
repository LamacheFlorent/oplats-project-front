import './Article.scss';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addRecipesFavorite } from '../../../../../actions/recipes';

const Article = ({ img, title, idRecipe }) => {
    const dispatch = useDispatch();

    return (
        <article className='card'>
            <img src={img} alt='img-recipe' />
            <div className="card__content">
                <Button variant="light" className='button-like' onClick={() => {dispatch(addRecipesFavorite(idRecipe))}}>
                    <i className="bi bi-emoji-heart-eyes like"></i>
                </Button>
                <p className="card__title">{title}</p>
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </article>
    )
};

export default Article;