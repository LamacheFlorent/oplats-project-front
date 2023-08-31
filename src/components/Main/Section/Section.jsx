import './Section.scss';
import Articles from './Articles/Articles';
import Category from './Category/Category';
import WatchMore from './WatchMore/WatchMore';

const Section = ({ name, articles }) => {
    return (
        <div className='section'>
            <Category name={name} />
            <Articles articles={articles}/>
            <WatchMore />
        </div>
    )
};

export default Section;