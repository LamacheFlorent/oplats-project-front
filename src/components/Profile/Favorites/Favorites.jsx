import './Favorites.scss';
import List from './List/List';

const Favorites = () => {
    return(
        <div className='fav'>
            <h1>Mes recettes favorites</h1>
            <List />
        </div>
    )
};

export default Favorites;