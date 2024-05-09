import { useState } from "react";
import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubs = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    return (
        <>
            <Container>
                Item count
            </Container>
            <Button onClick={handleAdd}>+</Button>
            <span> {count} </span>
            <Button onClick={handleSubs}>-</Button>

        </>
    )
}

export default ItemCount
