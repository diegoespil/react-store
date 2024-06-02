import cart from './assets/cart.png';
import style from './cartWidget.module.css';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalquantity } = useCartContext()

    return (
        <div className="ml-auto" >
            <img src={cart} alt="cart-widget" />
            <span>{totalquantity}</span>
        </div>
    )
}

export default CartWidget;