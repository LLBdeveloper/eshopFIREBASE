import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartWidget from './CartWidget';

import { useCart } from './CartContext'


function CartModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart} = useCart()




    console.log(cart)


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
                        <p>SHOPPING CART</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>INFORMATION OF YOUR CART WITH DETAILS</p>
                    <p>CANT    DETAIL        PRICE</p>
                    <p>02-tabla balance board-$38500</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">
                        Buy Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;