import { Container } from "react-bootstrap"
import { importProducts } from "../utils/importProducts"


const Home = () => {

    const handleOnClick = () => {
        importProducts()
    }

    return (
        <>
            <Container>
                <h1 className="d-flex">Bienvenido a la tienda de ropa Pampero.</h1>
                <p>Para poder ver los productos, cargue los productos.</p>
                <button className="btn btn-primary" onClick={handleOnClick}>Cargar productos</button>
            </Container>


        </>

    )
}

export default Home
