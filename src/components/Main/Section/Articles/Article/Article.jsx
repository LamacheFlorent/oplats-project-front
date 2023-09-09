import './Article.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Article = ({ img, title, idRecipe }) => {

    return (
        <Link to={`/recipe/${idRecipe}`}>
            <article className='card'>
                <img src={img} alt='img-recipe' />
                <div className="card__content">
                    <p className="card__title">{title}</p>
                    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </article>
        </Link>
    )
};

export default Article;