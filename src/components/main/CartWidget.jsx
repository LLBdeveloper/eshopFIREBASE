import './CartWidget.css'
import { useCart } from './CartContext'


const CartWidget = () => {
    
    const {totalQuantity} = useCart()
    

    return (
        <div to='/cart' className='CartWidget text-warning fw-bold bg-white rounded' >
            <img src='https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png' alt="carritoIcono" className='CartImg'/>
            <span className='m-3' >{totalQuantity}</span>
        </div>
    )
}

export default CartWidget

