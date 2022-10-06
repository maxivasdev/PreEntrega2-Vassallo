import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            28
        </div>
    )
}

export default CartWidget