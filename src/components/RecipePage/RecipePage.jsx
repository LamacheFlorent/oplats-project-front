import './RecipePage.scss';
import { useEffect, useState } from 'react';
import Details from './Details/Details';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ImgRecipe from './ImgRecipe/ImgRecipe';
import Ingredients from './Ingredients/Ingredients';
import Prepare from './Prepare/Prepare';
import TitleRecipe from './TitleRecipe/TitleRecipe';
import BtnAdd from './BtnAdd/BtnAdd';
import Reviews from './Reviews/Reviews';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const RecipePage = () => {

    const [recipe, setRecipe] = useState(null);
    const {idRecipe} = useParams();

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?includeNutrition=false&apiKey=b7dc8a490af6435f8132de0a24dfcd71`)
            .then((response) => {
                setRecipe(response.data);
            })
    }, [idRecipe]);

    if(!recipe) {
        return;
    }

    console.log(recipe)
    
    return (
        <Container fluid className='recipe-page'>
            <TitleRecipe text={recipe.title}/>
            <ImgRecipe src={recipe.image}/>
            <Details time={recipe.readyInMinutes} servings={recipe.servings}/>
            <BtnAdd />
            <Row className='description'>
                <Ingredients ingredients={recipe.extendedIngredients}/>
                <Prepare steps={recipe.analyzedInstructions[0].steps}/>
            </Row>
            <Reviews />
        </Container>
    )
};

export default RecipePage;