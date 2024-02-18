import { useEffect, useState  } from 'react';
import { ClipLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useNotificacion } from "../../notification/NotificactionProvider";
import { collection, addDoc, getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Container } from 'react-bootstrap';
import './Checkout.css'


function Checkout() {
    const { cart, removeItem, clearCart, decrementQuantity, incrementQuantity } = useCart();
    const { setNotification } = useNotificacion(); 
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false)
    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');    
    
    useEffect(() => {
        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotal(totalAmount);
        };
        calculateTotal();
    }, [cart]);

    
    useEffect(() => {
        setLoading(true)    
    }, [])
    

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
        event.preventDefault();

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
        
        clearCart();
    };

    return (
        <div className='d-flex justify-content-center align-items-center flex-column ' >
            {
                loading ? (
                    <div className="loading-spinner m-5 d-flex justify-content-center align-items-center flex-column" >
                        <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                        <h2 className=" m-5"> L o a d i n g  .   .   . </h2>                
                    </div>
                    ) : (
                    <Container  className="container bg-warning p-3 m-4 border border-dark border-5 rounded text-center" style={{width:'90%'}} >
                        <h1 className='text-center border border-dark shadow border-5 rounded m-2 p-2  fw-bold '>CHECKOUT</h1>
                        <div >
                            <h3 className='h3 '>Complete the Fields</h3>
                            <Form onSubmit={handleBuy}>
                                <Form.Group className="mb-3" controlId="name">
                                    <FloatingLabel  label="Name" className="m-3 shadow">
                                        <Form.Control style={{ width: '100%' }} type="text" placeholder="Example name"  value={buyerName} onChange={(e) => setBuyerName(e.target.value)} required/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <FloatingLabel  label="Email" className="m-3 shadow" >
                                        <Form.Control type="email" placeholder="name@example.com" required value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <FloatingLabel  label="Phone" className="m-3 shadow" >
                                        <Form.Control type="text" placeholder="1140202040" value={buyerPhone} required onChange={(e) => setBuyerPhone(e.target.value)}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <div className='mt-5'>
                                    <Link to="/" className="btn btn-dark m-1 p-4 text-white">See more</Link>

                                    {cart.length === 0 ? (
                                        <Button className="btn btn-secondary m-1 p-4 ps-5 pe-5" type="button" onClick={() => alert('No tienes productos en el carrito')}>Buy</Button>
                                    ) : (
                                        <Button className="btn btn-success m-1 p-4 ps-5 pe-5" type="submit">Buy</Button>
                                    )}
                                </div>
                            </Form>
                        </div>
                        <div>
                            <h3 className='m-5 h3'>Products Details</h3>
                            {cart.map(item => (
                                <div key={item.id}  className="border border-success  rounded border-4 p-2 text-center d-flex justify-content-center align-items-center m-1">
                                    
                                    <div className='me-auto'>
                                        <img id='imgCheckoutHide' src={item.img} alt="img producto" className='rounded-circle m-1' style={{ maxWidth: '50px'}} />
                                    </div>

                                    <div className='me-auto'>
                                        {item.name} - x{item.quantity} - ${item.price * item.quantity}
                                    </div>
                                    
                                    <div id='buttonCheckoutBlock' className=' me-auto' >
                                        <Button variant="danger" className='m-1' onClick={()=> decrementQuantity(item.id)}>-</Button>
                                        <Button variant="success" className='m-1' onClick={()=> incrementQuantity(item.id, item.stock)}>+</Button>
                                    </div>

                                    <div className='ms-auto'>
                                        <Button className="btn btn-secondary " onClick={() => handleRemoveItem(item.id)}>X</Button>
                                    </div>
                                </div>
                            ))}
                            <h2 className='m-5 fw-bold fs-1'>Total: $ {total}</h2>
                        </div>
                    </Container>
                )
            }
        </div>
    );
}

export default Checkout;