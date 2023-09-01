import './WatchMore.scss';
import { Link } from 'react-router-dom';

const WatchMore = ({ search }) => {

    return (
        <div className='watch-more'>
            <Link className='link-more' to={`/results/${search}`}>Voir plus
            <button type='button' className='button-more'>
                <i className="bi bi-arrow-right-circle"></i>
            </button>
            </Link>
        
        </div>
    )
};

export default WatchMore;