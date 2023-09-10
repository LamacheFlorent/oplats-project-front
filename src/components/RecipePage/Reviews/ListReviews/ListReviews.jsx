import './ListReviews.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReviews } from '../../../../actions/recipes';

const ListReviews = ({codeApi}) => {
    const listReviews = useSelector((state) => state.recipes.reviews);
    const dispatch = useDispatch();

    useEffect(() => {
        if(listReviews === null) {
            return;
        }

        dispatch(fetchReviews(codeApi))
    }, [codeApi]);

    return (
        <ul className='list-reviews'>
            {/* {listReviews.map((review, index) => { */}
                {/* return ( */}
                    <li className='review'>
                        <span id='nickname'>Florent L</span>
                        <span id='rate'>5/5</span>
                        <p id='comment'>Very good !</p>
                    </li>
                {/* ) */}
            {/* })} */}
        </ul>
    )
};

export default ListReviews;