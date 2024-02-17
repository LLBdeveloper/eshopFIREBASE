import { useState } from 'react';
import { Card, Carousel, Modal } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import ListGroup from 'react-bootstrap/ListGroup';
import CardText from "react-bootstrap/esm/CardText";
import { useCart } from "./CartContext";
import { useNotificacion } from "../../notification/NotificactionProvider";

const ItemDetail = ({ id, name, img, img2, img3, category, description, price, stock }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const { addItem, getProductQuantity } = useCart();
    const { setNotification } = useNotificacion();

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (imgSrc) => {
        setModalImg(imgSrc);
        setShowModal(true);
    };

    const handleOnAdd = (quantity) => {
        const productToAdd = { id, name, price, quantity, stock, img };
        addItem(productToAdd);
        setNotification('success', `Se agregó correctamente ${quantity} ${name}`);
    };

    const productQuantity = getProductQuantity(id);

    return (
        <Card key={id} style={{ maxWidth: '45rem', margin: '3rem', textAlign: 'center' }}>
            <Card.Body>
                <Card.Title className="fs-3 mb-3">{name.toUpperCase()}</Card.Title>
                <CardText>Categoria: {category}</CardText>
                <CardText>Stock: {stock}</CardText>

                <Carousel style={{ maxWidth: '50%', margin:'auto' }}>
                    <Carousel.Item onClick={() => handleShowModal(img)}>
                        <Card.Img src={img} alt="foto del producto 1" />
                    </Carousel.Item>
                    <Carousel.Item onClick={() => handleShowModal(img2)}>
                        <Card.Img src={img2} alt="foto del producto 2" />
                    </Carousel.Item>
                    <Carousel.Item onClick={() => handleShowModal(img3)}>
                        <Card.Img src={img3} alt="foto del producto 3" />
                    </Carousel.Item>
                </Carousel>
                <Card.Text className='mt-3'>{description}</Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item className='mt-3 fs-5'>Free Shipping </ListGroup.Item>
                <ListGroup.Item className='mb-3 mt-3 fs-3 fw-bold'>Price $ {price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {stock <= 0 ? (
                    <p>SIN STOCK</p>
                ) : (
                    <ItemCount stock={stock} initial={productQuantity || 1} onAdd={handleOnAdd} />
                )}
            </Card.Body>

            <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img src={modalImg} className="d-block  mx-auto" alt="foto del producto" style={{ maxWidth: '100%' }} />
                </Modal.Body>
            </Modal>
        </Card>
    );
}

export default ItemDetail;