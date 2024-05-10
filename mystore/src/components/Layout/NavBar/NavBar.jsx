import CartWidget from "../../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../../../assets/logo.png';
import styles from './navbar.module.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {


    return (
        <Navbar Navbar expand="lg" className="nav navbar-light " >
            <Container>

                <Navbar.Brand href="#home">
                    <Image className={styles.logo} src={logo} roundedCircle />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex gap-4">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                        <Nav.Link href="/category/pantalones">Pantalones</Nav.Link>
                        <Nav.Link href="/category/remeras">Remeras</Nav.Link>
                        <Nav.Link href="/category/buzos">Buzos</Nav.Link>
                        <Nav.Link href="/category/camperas">Camperas</Nav.Link>

                    </Nav>



                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>




    )
}

export default NavBar;