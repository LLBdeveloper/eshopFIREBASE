import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Checkout() {
    const { cart, removeItem } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotal(totalAmount);
        };
        calculateTotal();
    }, [cart]);

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    return (
        <div className="container bg-white p-3">
            <h1>Checkout</h1>
            <div>
                {cart.map(item => (
                    <div key={item.id} className="border border-success mb-2 p-2">
                        {item.name} - x{item.quantity} - ${item.price * item.quantity}
                        <button className="btn btn-danger ms-2" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                    </div>
                ))}
                <hr />
                <h3>Total: $ {total}</h3>
            </div>
            <Link to="/">Volver al inicio</Link>
            <button className="btn btn-success ms-2" onClick={() => alert('¡Gracias por tu compra!')}>Comprar</button>
        </div>
    );
}

export default Checkout;
