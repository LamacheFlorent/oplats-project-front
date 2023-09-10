import './Favorites.scss';
import List from './List/List';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
    const listFavoritesBDD = useSelector((state) => state.recipes.favoritesBDD);

    // tableau vide qui sera rempli par les data de l'api spoonacular après le fetch
    const [listFavoritesAPI, setListFavoritesAPI] = useState([]);

    // à partir d'un tableau d'objet
    // on créé un nouveau tableau ou l'on ne stock que le codeApi de chaque recette ex [34503, 343434, 34342]
    // on join pour créer une chaine de caractère avec les codeApi séparés par des virgules
    const ids = listFavoritesBDD.map((item) => item.codeApi).join(',');

    useEffect(() => {
        axios
            // endpoint en masse (pas la masse des ingrédients) masse pour Bulk
            .get(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=b7dc8a490af6435f8132de0a24dfcd71`)
            .then((response) => {
                setListFavoritesAPI(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [listFavoritesBDD])

    return (
        <div className='fav'>
            <h2>My favorites recipes</h2>
            <List list={listFavoritesAPI} />
        </div>
    )
};

export default Favorites;