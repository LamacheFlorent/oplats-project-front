import './Item.scss';
import Element from './Element/Element';
import Accordion from 'react-bootstrap/Accordion';

const Item = ({ name, elements }) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{name}</Accordion.Header>
                <Accordion.Body>
                    {elements && elements.map((element, index) => {
                        return (<Element key={index} title={element} />)
                    })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

export default Item;