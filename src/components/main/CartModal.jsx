import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartWidget from './CartWidget';

import { useCart } from './CartContext'


function CartModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart, removeItem} = useCart()




    console.log(cart)
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
                        <h1>SHOPPING CART</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-secondary'>
                    <h2>INFORMATION OF YOUR CART WITH DETAILS</h2>
                    {/* <p>CANT    DETAIL        PRICE</p> */}
                    {cart.map(item => (
                            <div key={item.id} className="border border-success mb-2 p-2">
                                {item.name} - x{item.quantity} - ${item.price * item.quantity}
                                <Button variant="danger" className="ms-2" onClick={() => removeItem(item.id)}>-</Button>
                            </div>
                    ))}
                    <hr />
                    <h3>TOTAL $ {total}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button to='/checkout' variant="success">
                        Buy Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;