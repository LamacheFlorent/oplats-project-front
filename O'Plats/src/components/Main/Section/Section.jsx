import Carrousel from './Carrousel/Carrousel';
import Category from './Category/Category';
import './Section.scss';

const Section = ({name}) => {
    return (
        <div className='section'>
            <Category name={name} />
            <Carrousel />
        </div>
    )
};

export default Section;