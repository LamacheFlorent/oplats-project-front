import './Details.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Details = () => {
    return (
        <Row className='details'>
            <Col>
                <i className="bi bi-hourglass-split"></i>
                <span>50 min</span>
            </Col>
            <Col>
                <i className="bi bi-thermometer-half"></i>
                <span>Medium</span>
            </Col>
        </Row>
    )
};

export default Details;