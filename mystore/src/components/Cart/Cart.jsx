import { useState } from "react";
import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/dbConnection';


const Cart = () => {
    const { cart, totalPrice, handleRemoveItem, handleClearCart } = useCartContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefono: ''
    })

    const handleBuy = () => {
        const orderCollections = collection(db, "orders")
        const newOrder = {
            buyer: formData,
            items: cart,
            data: new Date(),
            price: totalPrice
        }
        addDoc(orderCollections, newOrder)
            .then((doc) => alert("Compra realizada con exito, numero de orden: " + doc.id))
            .catch((err) => console.log(err))

        handleClearCart()
        setFormData({ name: "", email: "", telefono: "" })
    }

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map(({ id, title, price, qty }, index) => {
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{price}</td>
                                <td>{qty}</td>
                                <td><button onClick={() => { handleRemoveItem(id, price, qty) }}>Eliminar</button></td>
                            </tr>
                        )
                    })
                    }
                    <tr>
                        <td colSpan={4}>Total Price</td>
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>

            </Table>
            {!!cart.length ? <>
                <button onClick={handleClearCart}>Clear Cart</button>
                <label>Nombre</label>
                <input type="text" name="name" id="name" placeholder="Ingrese nombre" onChange={(e) => handleOnChange(e)} />
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="Ingrese email" onChange={(e) => handleOnChange(e)} />
                <label>Telefono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Ingrese telefono" onChange={(e) => handleOnChange(e)} />
                <button onClick={handleBuy}>Finalizar Compra</button> </> : ""
            }

        </>

    )
}

export default Cart
