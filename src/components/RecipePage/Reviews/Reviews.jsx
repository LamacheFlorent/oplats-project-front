import './Reviews.scss';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { changeCommentInput } from '../../../actions/recipes';
import { addReview } from '../../../actions/recipes';

const Reviews = () => {
    const dispatch = useDispatch();
    const review = useSelector((state) => state.recipes.inputComment);

    return(
        <Row className='reviews'>
            <h2>Comments</h2>
            <Form className='add-comment' onSubmit={(event) => {event.preventDefault(); dispatch(addReview(review))}} >
                <Form.Group>
                    <Form.Label>Write your comment</Form.Label>
                    <Form.Control as="textarea" className='write-comment' onChange={(event) => {dispatch(changeCommentInput(event.target.value))}}/>
                </Form.Group>
            </Form>
        </Row>
    )
};

export default Reviews;