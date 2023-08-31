import './WatchMore.scss';
import { Link } from 'react-router-dom';

const WatchMore = () => {
    return (
        <div className='watch-more'>
            <Link to="/">Voir plus
            <button type='button' className='button_more'>
                <i className="bi bi-arrow-right-circle"></i>
            </button>
            </Link>
        
        </div>
    )
};

export default WatchMore;