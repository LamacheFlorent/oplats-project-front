import './Reviews.scss';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeCommentInput } from '../../../actions/recipes';
import { addReview } from '../../../actions/recipes';
import ListReviews from './ListReviews/ListReviews';
import { changeValueRate } from '../../../actions/recipes';

const Reviews = ({ codeApi }) => {
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.recipes.inputComment);
    const rate = useSelector((state) => state.recipes.valueRate);

    return (
        <Row className='reviews'>
            <h2>Comments</h2>
            <ListReviews codeApi={codeApi} />
            <Form className='add-comment' onSubmit={(event) => { event.preventDefault(); dispatch(addReview(comment, rate, codeApi)) }} >
                <Form.Group>
                    <Form.Label>Write your comment</Form.Label>
                    <select name="rate" id="rate-select" onChange={(event) => {dispatch(changeValueRate(event.target.value))}}>
                        <option value="">-</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <Form.Control as="textarea" className='write-comment' onChange={(event) => { dispatch(changeCommentInput(event.target.value)) }} />
                </Form.Group>
                <Button className='btn-submit-comment' type="submit">Submit</Button>
            </Form>
        </Row>
    )
};

export default Reviews;