import './ListRecipes.scss';
import Article from '../../Main/Section/Articles/Article/Article';

const ListRecipes = ({results}) => {

    return (
        <div className='list-recipes'>
            {results.map((result) => {
                return (<Article key={result.id} img={result.image} title={result.title} idRecipe={result.id}/>)
            })}
        </div>
    )
};

export default ListRecipes;
