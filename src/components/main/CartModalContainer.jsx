import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartWidget from './CartWidget';
import { useCart } from './CartContext'
import { Link } from 'react-router-dom';


function CartModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart, removeItem, decrementQuantity, incrementQuantity, clearCart} = useCart()

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <CartWidget/>
            </Button>

            <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className='h1'>SHOPPING CART</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-secondary'>

                    <h2 className='fs-5'>INFORMATION OF YOUR CART WITH DETAILS</h2>
                
                    {cart.length === 0 && (<div className='text-center m-5'><h2 className='fs-1 fw-bold text-danger shadow'>YOUR CART IS EMPTY</h2></div>)}

                    {cart.map(item => (
                            <div key={item.id} className="border border-success m-4 p-5 text-center ">
                                <img src={item.img} alt="img producto" className='rounded-circle m-1' style={{ maxWidth: '50px'}} />
                                
                                {item.name} - x{item.quantity} - ${item.price * item.quantity}
                                <div>
                                    <Button  variant="secondary" className="m-5 " onClick={() => removeItem(item.id)}>x</Button>
                                    
                                    <Button variant="danger" className='m-1' onClick={()=> decrementQuantity(item.id)}>
                                        -
                                    </Button>
                                    <Button variant="success" className='m-1' onClick={()=> incrementQuantity(item.id, item.stock)}>
                                        +
                                    </Button>
                                </div>
                            </div>
                    ))}
                    {cart.length > 0 && ( 
                        <Button variant="danger" onClick={() => clearCart()}>Clear cart</Button>
                    )}
                    
                    <hr />
                    <h3>TOTAL $ {total}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {cart.length > 0 && ( 
                        <Link to='/checkout' className="btn btn-success ms-2" onClick={handleClose}>
                        Buy Now
                        </Link>
                    )}
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;