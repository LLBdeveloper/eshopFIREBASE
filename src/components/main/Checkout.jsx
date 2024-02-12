import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useNotificacion } from "../../notification/NotificactionProvider";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Checkout() {
    const { cart, removeItem, clearCart } = useCart();
    const [total, setTotal] = useState(0);
    const { setNotification } = useNotificacion(); 

    const [buyerName, setBuyerName] = useState('');
    // const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');


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

    const handleBuy = () => {
        // Vaciar el carrito
        clearCart();
        // Mostrar un mensaje de compra exitosa u otra acción
        setNotification('success', '¡Gracias por tu compra!');
        const orderInfo = `Nombre: ${buyerName}, Teléfono: , Email: ${buyerEmail}`;
        alert(orderInfo);
    };


    return (
        <div className="container bg-white p-3">
            <h1 className='border border-warning border-5 rounded m-5'>Checkout</h1>
            <h3>Ingrese sus datos</h3>
            <FloatingLabel controlId="floatingPassword" label="Nombre completo">
                <Form.Control type="text" placeholder="Nombre completo"  value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                <Form.Control type="email" placeholder="name@example.com" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)}/>
            </FloatingLabel>

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
            <button id='buy' className="btn btn-success ms-2" onClick={handleBuy}>Comprar</button>
        </div>
    );
}

export default Checkout;



// <div>
// <label htmlFor="buyerName">Nombre:</label>
// <input type="text" id="buyerName" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
// <label htmlFor="buyerPhone">Teléfono:</label>
// <input type="text" id="buyerPhone" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
// <label htmlFor="buyerEmail">Correo electrónico:</label>
// <input type="text" id="buyerEmail" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
// </div>


// 1 - id de el carri
// 2 - coleccion de prod que estaban en el carrito
// 3 -  document de los produc q tengo en el carrito con el stock actualizado
// 4 - de cada doc que traje de la base de datos lo comparas con el quiantity del carrito



// import { collection, getFirestore } from 'firebase/firestore';

// const sendOrder = () => {
//     const order = {
//         buyer: { name: 'Agustin', phone: '15123123', email: 'a@a.com'},
//         items: [{ name: ' bici', price: 100 }],
//         total: 100
//     };
//     const db = getFirestore();
//     const ordersCollection = collection(db,'orders');
// }