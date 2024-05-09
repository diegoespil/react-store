import CartWidget from "../../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../../../assets/logo.png';
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <>
            {/* <Navbar expand="lg" className="bg-body-tertiary m-auto"> */}
            <Navbar expand="lg" className="nav navbar-light ">
                <Container>
                    <Image className={styles.logo} src={logo} roundedCircle />
                    <Navbar.Brand href="#home">My store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Hombres" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Zapatillas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Camperas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Buzos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mujeres" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Zapatillas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Camperas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Buzos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Niños" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Zapatillas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Camperas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Buzos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav> {/* Utiliza ml-auto para alinear a la derecha */}
                            <CartWidget />
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar >
        </>



    )
}

export default NavBar;