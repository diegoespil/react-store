import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from '../../utils/MockData'
import ItemList from "../ItemList/ItemList";
/* import { useFetch } from "../../hooks/useFetch"; */
import Spinner from 'react-bootstrap/Spinner';
/* import { usePaginate } from "../../hooks/usePaginate"; */
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    //const { data, loading, error } = useFetch("https://fakestoreapi.com/products", "GET", null)

    const { categoryId } = useParams()

    /*  const itemsPerPage = 2;
 
     const {
         currentPage,
         totalPages,
         nextPage,
         prevPage,
         paginate,
         totalPagesArray,
         currentData,
     } = usePaginate(products, itemsPerPage); */



    useEffect(() => {
        if (categoryId) {
            getProductByCategory(categoryId).then((res) => {
                console.log(res);
                setProducts(res);
                setLoading(false);
            });
        } else {
            getProducts()
                .then((res) => {
                    setProducts(res);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }


    }, [categoryId])


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
                    {/* <button onClick={prevPage}>prev page</button>
                    {totalPagesArray.map((page) => {
                        if (page < 6) {
                            return (
                                <button key={page} onClick={() => paginate(page)}>
                                    {page}
                                </button>
                            );
                        }
                        if (page === 6) {
                            return "...";
                        }
                        if (page === totalPages) {
                            return (
                                <button key={page} onClick={() => paginate(page)}>
                                    {page}
                                </button>
                            );
                        }
                    })}
                    <button onClick={nextPage}>next page</button> */}
                </div>
            )}


        </main>
    )
}

export default ItemListContainer;