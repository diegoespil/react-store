import { useState } from "react";
import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';

const ItemCount = () => {
    const [cantItems, setCount] = useState(0);

    const handleAdd = () => {
        setCount(cantItems + 1)
    }

    const handleSubs = () => {
        if (cantItems > 0) {
            setCount(cantItems - 1)
        }

    }
    return (
        <>
            <Container>
                Item count
            </Container>
            <Button onClick={handleAdd}>+</Button>
            <span> {cantItems} </span>
            <Button onClick={handleSubs}>-</Button>

        </>
    )
}

export default ItemCount
