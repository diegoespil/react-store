import { useEffect, useState } from "react";
import { getProductById } from "../../utils/MockData";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then((response) => {
                console.log(response)
                setProduct(response)
                setLoading(false);
            })
            .catch((error) => {
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
