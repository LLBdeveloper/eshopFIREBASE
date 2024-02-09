import './CartWidget.css'
import { useCart } from './CartContext'
import cart from '../../../public/icons/cart.svg';
// import CartModal from './Cart'

const CartWidget = () => {
    
    const {totalQuantity} = useCart()
    

    return (
        <div to='' className='CartWidget text-warning fw-bold bg-white rounded' >
            <img style={{
                background: 'white',
                padding: '10px'
        }}

            src={cart} alt="carritoIcono" className='CartImg'/>
            <span className='m-3' >{totalQuantity}</span>
        </div>
    )
}

export default CartWidget

