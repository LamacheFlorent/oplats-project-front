import Article from '../../../Main/Section/Articles/Article/Article';
import './List.scss';

const List = ({ list }) => {
    return (
        <div className='fav-list'>
            {list && list.map((item, index) =>
                <Article key={index} img={item.image} title={item.title} />
            )}
        </div>
    )
};

export default List;