import './Carrousel.scss';
import Article from '../Article/Article';
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
    return (
        // <div className='carrousel'>
        //     <Article />
        //     <Article />
        //     <Article />
        // </div>

        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className='cards'>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='cards'>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='cards'>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </Carousel.Item>
        </Carousel>
    )
};

export default Carrousel;