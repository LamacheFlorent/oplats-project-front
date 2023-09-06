import Article from '../../../Main/Section/Articles/Article/Article';
import './List.scss';

const List = ({list}) => {
    return(
        <div className='fav-list'>
            {list && list.map((item) => <Article key={item.id} img={item.image} title={item.title}/>)}
        </div>
    )
};

export default List;