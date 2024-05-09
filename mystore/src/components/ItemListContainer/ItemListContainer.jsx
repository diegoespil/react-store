import { useEffect, useState } from "react";
import { getProducts } from '../../utils/MockData'
import ItemList from "../ItemList/ItemList";
import { useFetch } from "../../hooks/useFetch";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    //const { data, loading, error } = useFetch("https://fakestoreapi.com/products", "GET", null)

    useEffect(() => {
        getProducts()
            .then((prod) => {
                setProducts(prod)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <main>
            <h1>{greeting}</h1>
            {loading === true ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>

            ) : (
                <div>
                    <ItemList productsList={products} />
                </div>
            )

            }


        </main>
    )
}

export default ItemListContainer;