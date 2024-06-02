import { useState } from "react";
import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const ItemCount = ({ intial, handleAgregarAlCarrito }) => {
    const [cantItems, setCount] = useState(0);
    const [prodAgregado, setProdAgregado] = useState(false);

    const handleAdd = () => {
        setCount(cantItems + 1)
    }

    const handleSubs = () => {
        if (cantItems > 0) {
            setCount(cantItems - 1)
        }
    }

    const handleAddToCart = () => {
        setProdAgregado(true);
        handleAgregarAlCarrito(cantItems);
    }
    return (
        <Container className="d-flex flex-column gap-3 justify-content-center">
            <Container>
                Item count
            </Container>
            <Container className="d-flex">
                <Button onClick={handleSubs}>-</Button>
                <span> {cantItems} </span>
                <Button onClick={handleAdd}>+</Button>
            </Container>

            <Container className="d-flex">
                {prodAgregado ?
                    <Link to="/cart" className="btn btn-primary">Finalizar compra</Link>
                    : <Button onClick={handleAddToCart}>Agregrar al carrito</Button>
                }
            </Container>


        </Container>
    )
}

export default ItemCount
