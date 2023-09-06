import './Favorites.scss';
import List from './List/List';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
    const listFavoritesBDD = useSelector((state) => state.recipes.favoritesBDD);
    const [listFavoritesAPI, setListFavoritesAPI] = useState([]);

    useEffect(() => {
        listFavoritesBDD.map((item) => {
            axios.get(`https://api.spoonacular.com/recipes/${item.codeApi}/information?includeNutrition=false&apiKey=b7dc8a490af6435f8132de0a24dfcd71`)
                .then((response) => {
                    console.log(response.data);
                    setListFavoritesAPI((prevList) => [...prevList, response.data])
                })
                .catch((error) => {
                    console.log(error);
                });
        })
    }, [listFavoritesBDD])

    return (
        <div className='fav'>
            <h1>Mes recettes favorites</h1>
            <List list={listFavoritesAPI} />
        </div>
    )
};

export default Favorites;