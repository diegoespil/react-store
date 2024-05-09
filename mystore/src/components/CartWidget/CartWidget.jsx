import cart from './assets/cart.png';
import style from './cartWidget.module.css';

const CartWidget = () => {
    return (
        <div className="ml-auto" >
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget;