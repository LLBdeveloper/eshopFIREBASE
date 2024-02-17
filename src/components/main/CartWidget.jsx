import { useCart } from './CartContext'
import cart from '../../../public/icons/cart.svg';

const CartWidget = () => {
    
    const {totalQuantity} = useCart()
    

    return (
        <div to='' className='CartWidget text-warning fw-bold bg-white rounded' >
            <img style={{
                background: 'white',
                padding: '10px',
                maxHeight: '49px',
                borderRadius: '2rem'
        }}

            src={cart} alt="carritoIcono"  />
            <span className='m-3' >{totalQuantity}</span>
        </div>
    )
}

export default CartWidget

