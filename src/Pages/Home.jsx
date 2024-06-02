import { importProducts } from "../utils/importProducts"


const Home = () => {

    const handleOnClick = () => {
        importProducts()
    }

    return (
        <div>
            Home Page
            <button onClick={handleOnClick}>Cargar productos</button>
        </div>
    )
}

export default Home
