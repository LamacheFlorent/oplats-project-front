import Slide from './Slide/Slide';
import Category from './Category/Category';
import './Section.scss';

const Section = ({name, articles}) => {
    return (
        <div className='section'>
            <Category name={name} />
            <Slide articles={articles}/>
        </div>
    )
};

export default Section;