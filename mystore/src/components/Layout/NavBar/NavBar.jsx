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
                        <Link to="/" >Home</Link>
                        <Link to="/products">Productos</Link>
                        <Link to="/category/pantalones">Pantalones</Link>
                        <Link to="/category/remeras">Remeras</Link>
                        <Link to="/category/buzos">Buzos</Link>
                        <Link to="/category/camperas">Camperas</Link>
                        <Link to="/cart">Cart</Link>
                    </Nav>



                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>




    )
}

export default NavBar;