import './Articles.scss';
import Article from './Article/Article';


const Articles = ({ articles }) => {
    return(
        <div className='articles-group'>
            {articles.map((article, index) => (
                <Article key={index} img={article.image} title={article.title} idRecipe={article.id}/>
            ))}
        </div>
    )
};


export default Articles;