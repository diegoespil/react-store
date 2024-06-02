import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "products");
        const docRef = doc(productsCollection, itemId)
        getDoc(docRef).then((res) => {
            setProduct({ id: res.id, ...res.data() })
            setLoading(false)
        }).catch((error) => {
            setLoading(false);
            console.log(error)
        })
    }, [itemId]);

    return loading === true ? (
        <Spinner />
    ) : (
        <div>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer
