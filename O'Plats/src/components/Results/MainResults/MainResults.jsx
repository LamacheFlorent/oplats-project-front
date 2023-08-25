import './MainResults.scss';
import Article from '../../Main/Section/Article/Article';

const MainResults = ({results}) => {

    return (
        <div className='main-results'>
            {results.map((result) => {
                return (<Article key={result.id} img={result.image} title={result.title} />)
            })}
        </div>
    )
};

export default MainResults;
