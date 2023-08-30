import './Header.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import BtnConnexion from './BtnConnexion/BtnConnexion';
import InputSearch from './InputSearch/InputSearch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    return (
        <Container className='header' fluid>
            <Row className='first-row'>
                <Col><Logo /></Col>
                <Col><Menu /></Col>
                <Col className='btn-co'><BtnConnexion /></Col>
            </Row>
            <Row>
                <InputSearch />
            </Row>
        </Container>
    )
};

export default Header;