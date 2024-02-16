import { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useNotificacion } from "../../notification/NotificactionProvider";
import { collection, addDoc, getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Checkout() {
    const { cart, removeItem, clearCart } = useCart();
    const [total, setTotal] = useState(0);
    const { setNotification } = useNotificacion(); 
    const [loading, setLoading] = useState(false)
    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');

    useEffect(() => {

        setLoading(true)

        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotal(totalAmount);
        };
        calculateTotal();
    }, [cart]);


    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
        }, 800);
    },)

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    const decrementStock = async (productId, quantitySold) => {
        const db = getFirestore();
        const productRef = doc(db, 'products', productId);

        try {
            const productSnapshot = await getDoc(productRef);
            if (productSnapshot.exists()) {
                const currentStock = productSnapshot.data().stock;
                const newStock = currentStock - quantitySold;
                await updateDoc(productRef, { stock: newStock });
                console.log('Stock actualizado correctamente');
            } else {
                console.log('El producto no existe');
            }
        } catch (error) {
            console.error('Error al actualizar el stock:', error);
        }
    };

    const sendOrder = async (order) => {
        try {
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders');
            await addDoc(ordersCollection, order);
            setNotification('success', '¡Orden creada exitosamente!');

        } catch (error) {
            setNotification('error', '¡Error al crear la orden!');
        }
    };

    const handleBuy = async () => {
        // Verificar si hay suficiente stock para cada producto en el carrito
        for (const item of cart) {
            const db = getFirestore();
            const productRef = doc(db, 'products', item.id);

            try {
                const productSnapshot = await getDoc(productRef);
                if (productSnapshot.exists()) {
                    const currentStock = productSnapshot.data().stock;
                    alert('Tu compra fue confirmada, te contactaremos para coordiar todo en tan solo minutos')
                    if (currentStock < item.quantity) {
                        // Si el stock es insuficiente para algún producto, mostrar un mensaje de error y no permitir la compra
                        alert(`El producto "${item.name}" tiene stock insuficiente`);
                        return;
                    }
                } else {
                    setNotification('error', '¡El producto no existe!');

                }
            } catch (error) {
                setNotification('error', '¡Error al verificar el stock!');
                return;
            }
        }

        setNotification('success', '¡Gracias por tu compra!');
        // Crear la orden en Firebase
        const order = {
            buyer: { name: buyerName, phone: buyerPhone, email: buyerEmail },
            items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
            total: total
        };
        await sendOrder(order);
        // Restar la cantidad vendida del stock de cada producto
        cart.forEach(item => {
            decrementStock(item.id, item.quantity);
        });
                // Vaciar el carrito
                clearCart();
    };

    return (
        <div className='d-flex justify-content-center align-items-center flex-column' >
            {
                loading ? (
                    <div className="loading-spinner m-5 d-flex justify-content-center align-items-center flex-column" >
                        <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                        <h2 className=" m-5"> L o a d i n g  .   .   . </h2>                
                    </div>
                    ) : (
                    <div className="container bg-white p-3 m-5 border border-dark border-5 rounded-5 text-center " style={{ maxWidth: '60vw' }}>
                        <h1 className='text-center border border-warning border-5 rounded m-5 p-3'>CHECKOUT</h1>
                        <div className='m-5 '>
                            <h3 className='m-3'>Complete the Fields</h3>
                            <FloatingLabel controlId="floatingInput1" label="Full name" className="m-3">
                                <Form.Control type="text" placeholder="Example name"  value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput2" label="Email address" className="m-3" >
                                <Form.Control type="email" placeholder="name@example.com" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput3" label="Phone number" className="m-3" >
                                <Form.Control type="text" placeholder="1140202040" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)}/>
                            </FloatingLabel>
                        </div>

                        <div>
                            <h3 className='mt-5 mb-3'>Products Details</h3>
                            {cart.map(item => (
                                <div key={item.id} className="border border-success mb-2 p-2">
                                    {item.name} - x{item.quantity} - ${item.price * item.quantity}
                                    <button className="btn btn-danger ms-2" onClick={() => handleRemoveItem(item.id)}>Delete</button>
                                </div>
                            ))}

                            <h2 className='m-5 fw-bold'>Total: $ {total}</h2>
                        </div>
                        <Link to="/" className="btn btn-primary ms-2">See more</Link>
                        <button id='buy' className="btn btn-success ms-2" onClick={handleBuy}>Buy</button>
                    </div>
                )
            }
        </div>
        


        
    );
}

export default Checkout;















// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from './CartContext';
// import { useNotificacion } from "../../notification/NotificactionProvider";
// import { collection, addDoc, getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';


// function Checkout() {
//     const { cart, removeItem, clearCart } = useCart();
//     const [total, setTotal] = useState(0);
//     const { setNotification } = useNotificacion(); 

//     const [buyerName, setBuyerName] = useState('');
//     const [buyerPhone, setBuyerPhone] = useState('');
//     const [buyerEmail, setBuyerEmail] = useState('');

//     useEffect(() => {
//         const calculateTotal = () => {
//             const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//             setTotal(totalAmount);
//         };
//         calculateTotal();
//     }, [cart]);

//     const handleRemoveItem = (id) => {
//         removeItem(id);
//     };

//     const decrementStock = async (productId, quantitySold) => {
//         const db = getFirestore();
//         const productRef = doc(db, 'products', productId);

//         try {
//             const productSnapshot = await getDoc(productRef);
//             if (productSnapshot.exists()) {
//                 const currentStock = productSnapshot.data().stock;
//                 const newStock = currentStock - quantitySold;
//                 await updateDoc(productRef, { stock: newStock });
//                 console.log('Stock actualizado correctamente');
//             } else {
//                 console.log('El producto no existe');
//             }
//         } catch (error) {
//             console.error('Error al actualizar el stock:', error);
//         }
//     };

//     const sendOrder = async (order) => {
//         try {
//             const db = getFirestore();
//             const ordersCollection = collection(db, 'orders');
//             await addDoc(ordersCollection, order);
//             console.log('Orden creada exitosamente');
//         } catch (error) {
//             console.error('Error al crear la orden:', error);
//         }
//     };

//     const handleBuy = async () => {
//         // Vaciar el carrito
//         clearCart();
//         // Mostrar un mensaje de compra exitosa u otra acción
//         setNotification('success', '¡Gracias por tu compra!');
//         // Crear la orden en Firebase
//         const order = {
//             buyer: { name: buyerName, phone: buyerPhone, email: buyerEmail },
//             items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
//             total: total
//         };
//         await sendOrder(order);
//         // Restar la cantidad vendida del stock de cada producto
//         cart.forEach(item => {
//             decrementStock(item.id, item.quantity);
//         });
//     };

//     return (
//         <div className="container bg-white p-3">
//             <h1 className='border border-warning border-5 rounded m-5 p-2'>Finalizar compra</h1>
//             <h3 className='m-3'>Ingrese sus datos</h3>
//             <FloatingLabel controlId="floatingInput1" label="Nombre completo" className="m-3">
//                 <Form.Control type="text" placeholder="Example name"  value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingInput2" label="Email address" className="m-3" >
//                 <Form.Control type="email" placeholder="name@example.com" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)}/>
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingInput3" label="Phone number" className="m-3" >
//                 <Form.Control type="text" placeholder="1140202040" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)}/>
//             </FloatingLabel>

//             <div>
//                 {cart.map(item => (
//                     <div key={item.id} className="border border-success mb-2 p-2">
//                         {item.name} - x{item.quantity} - ${item.price * item.quantity}
//                         <button className="btn btn-danger ms-2" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
//                     </div>
//                 ))}
//                 <hr />
//                 <h3>Total: $ {total}</h3>
//             </div>
//             <Link to="/">Volver al inicio</Link>
//             <button id='buy' className="btn btn-success ms-2" onClick={handleBuy}>Comprar</button>
//         </div>
//     );
// }

// export default Checkout;
























// ORIGINAL ACA ABAJO

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from './CartContext';
// import { useNotificacion } from "../../notification/NotificactionProvider";
// import { collection, addDoc, getFirestore } from 'firebase/firestore';

// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';


// function Checkout() {
//     const { cart, removeItem, clearCart } = useCart();
//     const [total, setTotal] = useState(0);
//     const { setNotification } = useNotificacion(); 

//     const [buyerName, setBuyerName] = useState('');
//     const [buyerPhone, setBuyerPhone] = useState('');
//     const [buyerEmail, setBuyerEmail] = useState('');


//     useEffect(() => {
//         const calculateTotal = () => {
//             const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//             setTotal(totalAmount);
//         };
//         calculateTotal();
//     }, [cart]);

//     const handleRemoveItem = (id) => {
//         removeItem(id);
//     };

    
    
//     const sendOrder = async (order) => {
//         try {
//             const db = getFirestore();
//             const ordersCollection = collection(db, 'orders');
//             await addDoc(ordersCollection, order);
//             console.log('Orden creada exitosamente');
//         } catch (error) {
//             console.error('Error al crear la orden:', error);
//         }
//     }
    
    
    
//     const handleBuy = async () => {
//         // Vaciar el carrito
//         clearCart();
//         // Mostrar un mensaje de compra exitosa u otra acción
//         setNotification('success', '¡Gracias por tu compra!');
//         // Crear la orden en Firebase
//         const order = {
//             buyer: { name: buyerName, phone: buyerPhone, email: buyerEmail },
//             items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
//             total: total
//         };
//         await sendOrder(order);
//     };
    
    
//     return (
//         <div className="container bg-white p-3">
//             <h1 className='border border-warning border-5 rounded m-5 p-2'>Finalizar compra</h1>
//             <h3 className='m-3'>Ingrese sus datos</h3>
//             <FloatingLabel controlId="floatingInput1" label="Nombre completo" className="m-3">
//                 <Form.Control type="text" placeholder="Example name"  value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingInput2" label="Email address" className="m-3" >
//                 <Form.Control type="email" placeholder="name@example.com" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)}/>
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingInput3" label="Phone number" className="m-3" >
//                 <Form.Control type="text" placeholder="1140202040" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)}/>
//             </FloatingLabel>

//             <div>
//                 {cart.map(item => (
//                     <div key={item.id} className="border border-success mb-2 p-2">
//                         {item.name} - x{item.quantity} - ${item.price * item.quantity}
//                         <button className="btn btn-danger ms-2" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
//                     </div>
//                 ))}
//                 <hr />
//                 <h3>Total: $ {total}</h3>
//             </div>
//             <Link to="/">Volver al inicio</Link>
//             <button id='buy' className="btn btn-success ms-2" onClick={handleBuy}>Comprar</button>
//         </div>
//     );
// }

// export default Checkout;












// const handleBuy = () => {
//     setNotification('success', '¡Gracias por tu compra!');
    
//     const orderInfo = `Usted a comprado ${cart.map(item => `${item.name} (x${item.quantity})`).join(', ')} Nombre: ${buyerName}, Teléfono: ${buyerPhone} , Email: ${buyerEmail}`;
    
//     alert(orderInfo);
//     clearCart();
// };
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// 1 - id de el carri
// 2 - coleccion de prod que estaban en el carrito
// 3 -  document de los produc q tengo en el carrito con el stock actualizado
// 4 - de cada doc que traje de la base de datos lo comparas con el quiantity del carrito
// 
// 
// import { collection, getFirestore } from 'firebase/firestore';
// 
// const sendOrder = () => {
//     const order = {
//         buyer: { name: 'Agustin', phone: '15123123', email: 'a@a.com'},
//         items: [{ name: ' bici', price: 100 }],
//         total: 100
//     };
//     const db = getFirestore();
//     const ordersCollection = collection(db,'orders');
// }