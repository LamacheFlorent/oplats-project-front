import './Prepare.scss';
import Col from 'react-bootstrap/Col';

const Prepare = ({steps}) => {
    return (
        <Col className='prepare'>
            <h2>Preparation</h2> <br></br>
            <ul className='list-steps'>
                {steps.map((item, index) => {
                    return(
                        <li key={index}><span>Step {index + 1} :</span> {item.step}</li>
                    )
                })}
            </ul>
        </Col>
    )
};

export default Prepare;