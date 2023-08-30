import './Slide.scss';
import Article from '../Article/Article';
import { Carousel, Container, Row, Col } from 'react-bootstrap';


const Carrousel = ({ articles }) => {
    return (
        <Carousel data-bs-theme="dark" className='carousel'>
            {articles && articles.map((article, index) => (
                <Carousel.Item key={index} className='slide'>
                    <Article img={article.image} title={article.title}/>
                </Carousel.Item>
            ))}

        </Carousel>
    )
};

export default Carrousel;