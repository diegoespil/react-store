import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


const Item = ({ id, title, description, price, image }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/products/${id}`)
    };

    return (

        <>
            <Card className="mt-5" style={{ width: '15rem', cursor: "pointer" }} onClick={handleOnClick}>
                <Card.Img variant="top" src={image} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
