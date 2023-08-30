import Articles from './Articles/Articles';
import Category from './Category/Category';
import './Section.scss';

const Section = ({ name, articles }) => {
    return (
        <div className='section'>
            <Category name={name} />
            <Articles articles={articles}/>
        </div>
    )
};

export default Section;