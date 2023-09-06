import './Favorites.scss';
import List from './List/List';
import { useSelector } from 'react-redux';

const Favorites = () => {
    const list = useSelector((state) => state.recipes.favorites);

    return(
        <div className='fav'>
            <h1>Mes recettes favorites</h1>
            <List list={list}/>
        </div>
    )
};

export default Favorites;