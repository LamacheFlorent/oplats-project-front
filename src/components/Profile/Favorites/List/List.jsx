import Article from '../../../Main/Section/Articles/Article/Article';
import './List.scss';
import { useSelector } from 'react-redux';

const List = () => {
    const list = useSelector((state) => state.recipes.favorites);
    
    return(
        <div className='fav-list'>
            {list.map((item) => <Article key={item.id} img={item.image} title={item.title}/>)}
        </div>
    )
};

export default List;