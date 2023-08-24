import './Carrousel.scss';
import Article from '../Article/Article';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Carrousel = ({ title, img }) => {
    const section1 = useSelector((state) => state.recipes.section1);
    const section2 = useSelector((state) => state.recipes.section2);
    const section3 = useSelector((state) => state.recipes.section3);

    return (
        <Carousel data-bs-theme="dark">
        
        </Carousel>
    )
};

export default Carrousel;