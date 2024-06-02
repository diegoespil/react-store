import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({ id, title, description, price, category, image }) => {
    const { addToCart } = useCartContext()

    const handleOnAdd = (quantity) => {
        addToCart({ id, title, description, price, category, image }, quantity)
    }

    return (
        <Card style={{ width: "18rem", cursor: "pointer" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <ItemCount
                    initial={1} handleAgregarAlCarrito={handleOnAdd}
                />

            </Card.Body>
        </Card>
    )
}

export default ItemDetail
