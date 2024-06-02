import { children, createContext, useContext, useEffect, useState } from "react"

const cartContext = createContext()

export const { Provider } = cartContext

export const useCartContext = () => {
    return useContext(cartContext)
}

const CartContextProvider = ({ children }) => {
    const [totalquantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        if (cart) {
            setCart(cart)
            setTotalPrice(cart.reduce((acc, elem) => acc + elem.price * elem.qty, 0))
            setTotalQuantity(cart.reduce((acc, elem) => acc + elem.qty, 0))
        }

    }, [])

    const isInCart = (id) => {
        console.log("id to find: " + id)
        return cart.find(elem => elem.id === id)
    }

    const addToCart = (item, qty) => {
        setTotalQuantity(totalquantity + qty)
        setTotalPrice(Math.round((totalPrice + qty * item.price) * 100) / 100)
        let newCart = []
        if (isInCart(item.id)) {
            newCart = cart.map((elem) => {
                console.log(elem)
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty }
                } else {
                    return elem
                }
            })
            setCart(newCart)
        } else {
            newCart = [...cart, { ...item, qty }]
            setCart(newCart)
        }
        setCartToLocalStorage(newCart)
    }

    const setCartToLocalStorage = (newCart) => {
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const handleRemoveItem = (id, price, qty) => {
        console.log(id, price, qty)
        setTotalPrice(Math.round((totalPrice - price * qty) * 100) / 100)
        setTotalQuantity(totalquantity - qty)

        const newCart = cart.filter(elem => elem.id !== id)

        setCart(newCart)
        setCartToLocalStorage(newCart)
    }

    const handleClearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotalPrice(0)
        setCartToLocalStorage([])
    }

    const contextValue = {
        totalquantity,
        cart,
        totalPrice,
        addToCart,
        handleRemoveItem,
        handleClearCart
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartContextProvider