import './Reviews.scss';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { changeCommentInput } from '../../../actions/recipes';

const Reviews = () => {
    const dispatch = useDispatch();

    return(
        <Row className='reviews'>
            <h2>Comments</h2>
            <Form className='add-comment'>
                <Form.Group>
                    <Form.Label>Write your comment</Form.Label>
                    <Form.Control as="textarea" className='write-comment' onChange={(event) => {dispatch(changeCommentInput(event.target.value))}}/>
                </Form.Group>
            </Form>
        </Row>
    )
};

export default Reviews;