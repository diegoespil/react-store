import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = (item) => {
    const { id, title, description, price, category, image } = item;
    console.log(price)
    console.log(image)
    console.log(description)
    return (
        <Card style={{ width: "18rem", cursor: "pointer" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <ItemCount
                    initial={1}
                />
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
