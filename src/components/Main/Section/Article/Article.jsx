import './Article.scss';
import Button from 'react-bootstrap/Button';

const Article = ({ img, title }) => {
    return (
        <div className='card'>
            <img src={img} alt='img-recipe' />
            <div className="card__content">
                <Button variant="light" className='button-like'>
                    <i className="bi bi-emoji-heart-eyes like"></i>
                </Button>
                <p className="card__title">{title}</p>
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
};

export default Article;