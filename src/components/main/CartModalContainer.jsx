import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartWidget from './CartWidget';
import { useCart } from './CartContext'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './CartModal.css'

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
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className='h1'>SHOPPING CART</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-secondary text-center p-5'>

                    <h2 className='h2 mb-5'>INFORMATION OF YOUR CART WITH DETAILS</h2>
                
                    {cart.length === 0 && (<div className='text-center m-5'><h2 className='fs-1 fw-bold text-danger shadow'>YOUR CART IS EMPTY</h2></div>)}

                    {cart.map(item => (
                            <Container key={item.id} className="border border-success border-3 rounded m-4 p-5 text-center d-flex justify-content-center align-items-center  ">
                                <div className='me-auto' >
                                    <Button  variant="danger" className="rounded-circle me-1" onClick={() => removeItem(item.id)}>
                                            X
                                    </Button>
                                </div>
                                <div className='me-auto'>
                                    <img id='imgModalHide' src={item.img} alt="img producto" className='img-fluid rounded-circle me-1' style={{ maxWidth: '4rem'}} />
                                </div>
                                <div className='me-auto'>                                    
                                    <span className='fs-4 fw-bold me-2 '>
                                        {item.name} - x{item.quantity} - ${item.price * item.quantity}
                                    </span>
                                </div>
                                <div className='ms-auto' id='buttonModalHide'>
                                    <Button variant="danger" className='m-1 ' onClick={()=> decrementQuantity(item.id)}>
                                        -
                                    </Button>
                                    <Button variant="success" className='m-1 ' onClick={()=> incrementQuantity(item.id, item.stock)}>
                                        +
                                    </Button>
                                </div>
                            </Container>
                    ))}
                    
                    <div id='clearCart'  className='text-start'>
                        {cart.length > 0 && ( 
                            <Button variant="danger" onClick={() => clearCart()} className='m-3'>Clear cart</Button>
                        )}
                    </div>
                    
                    <hr />
                    <h3 className='fs-2 fw-bold m-4'>TOTAL $ {total}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='p-3' onClick={handleClose}>
                        Close
                    </Button>
                    {cart.length > 0 && ( 
                        <Link to='/checkout' className="btn btn-success ms-3 p-3" onClick={handleClose}>
                        BUY NOW
                        </Link>
                    )}
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;



