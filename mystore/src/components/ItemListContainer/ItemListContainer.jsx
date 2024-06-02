import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { collection, getDocs, where } from "firebase/firestore";
import { query } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const { category } = useParams()

    const getProductsByFirebase = (qry) => {
        getDocs(qry)
            .then(({ docs }) => {
                const prodFromDocs = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProducts(prodFromDocs);
                setLoading(false)
            }).catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        setLoading(true)
        const productsCollection = collection(db, "products");
        if (category) {
            const consulta = query(productsCollection, where("category", "==", category));
            getProductsByFirebase(consulta)
        } else {
            getProductsByFirebase(productsCollection)
        }
    }, [category])


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
            )}


        </main>
    )
}

export default ItemListContainer;