import './Details.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Details = ({time, servings}) => {
    return (
        <Row className='details'>
            <Col>
                <i className="bi bi-hourglass-split"></i>
                <span>{time} min</span>
            </Col>
            <Col>
            <i className="bi bi-person-fill"></i>
                <span>{servings} {servings > 1 ? "servings" : "serving"}</span>
            </Col>
        </Row>
    )
};

export default Details;