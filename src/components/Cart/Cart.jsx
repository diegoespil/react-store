import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/dbConnection';
import { Container } from "react-bootstrap";


const Cart = () => {
    const { cart, totalPrice, handleRemoveItem, handleClearCart } = useCartContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefono: ''
    })
    const [isButtonDisabled, setButtonDisabled] = useState(true)

    const handleBuy = () => {
        const confirmBuy = confirm("¿Confirma la compra?")
        if (confirmBuy) {
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

    }

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(formData)
        const values = Object.values(formData)
        const completeData = values.every(val => val !== "")
        if (completeData === true) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [formData])
    return (
        !!cart.length ?
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
                <button className="btn btn-primary" onClick={handleClearCart}>Vaciar carrito</button>

                <Container className="">
                    <Container className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" name="name" id="name" placeholder="Ingrese nombre" className="form-control" onChange={(e) => handleOnChange(e)} />
                    </Container>
                    <Container className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" id="email" placeholder="Ingrese email" className="form-control" onChange={(e) => handleOnChange(e)} />
                    </Container>
                    <Container className="mb-3" >
                        <label className="form-label">Telefono</label>
                        <input type="tel" name="telefono" id="telefono" placeholder="Ingrese telefono" className="form-control" onChange={(e) => handleOnChange(e)} />
                    </Container>

                    <button className="btn btn-primary" onClick={handleBuy} disabled={isButtonDisabled}>Finalizar Compra</button>
                </Container>


            </> : <p className="display-4 text-center">Carrito vacio</p>


    )
}

export default Cart
