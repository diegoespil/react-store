import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, name, description, marca, talles, price, image }) => {


    return (

        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
