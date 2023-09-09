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
            {listReviews.map((review, index) => {
                return (
                    <li className='review' key={index}>
                        <span id='nickname'>Pseudo 1 {review.nickname}</span>
                        <span id='rate'>{review.rate}/5</span>
                        <p id='comment'>{review.comment}</p>
                    </li>
                )
            })}
        </ul>
    )
};

export default ListReviews;