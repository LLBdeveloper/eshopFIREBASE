// import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { useNotificacion } from "../../notification/NotificactionProvider";
import CardText from "react-bootstrap/esm/CardText";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const {addItem, isInCart} = useCart()
    const {setNotification} = useNotificacion()//se puede exportar el context pero esta hecho con customHooks// asi es del modo tradicional: useContext(NotificationContext) y eso arriba: import { NotificationContext } from "../../notification/NotificactionProvider"; import { useCart } from "./CartContext";

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd) 
        setNotification('success',`Se agrego correctamente ${quantity} ${name}`)
    }


    return (
        <Card key={id} style={{ width: '18rem', margin: '3rem', textAlign: 'center' }} >
                <Card.Body>
                    <Card.Title>{name.toUpperCase()}</Card.Title>
                    <CardText>Categoria: {category}</CardText>
                        <Carousel>
                            <Carousel.Item>
                                <Card.Img src={img} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src="https://picsum.photos/200/301" alt="" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src="https://picsum.photos/200/302" alt="" />
                                
                            </Carousel.Item>
                        </Carousel>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Envio: Free Shipping</ListGroup.Item>
                    <ListGroup.Item>Precio $ {price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {stock <= 0 ? (
                        <p>SIN STOCK</p>
                    ) : (
                        isInCart(id) ? (
                            <Link to='/checkout' className="btn btn-warning">FINALIZAR COMPRA</Link>
                        ) : (
                            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                        )
                    )}
                </Card.Body>
            </Card>
    )
}

export default ItemDetail

// {
//     isInCart(id) ?  ( <Link to='/checkout' className="btn btn-warning">FINALIZAR COMPRA </Link>
//     ):( <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
//     )
// }



// import ItemCount from "./ItemCount"
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Link } from "react-router-dom";


// const ItemDetail = ({name, id, img, price, stock}) => {
//     return (
//         <Card key={id} style={{ width: '18rem', margin: '3rem' }}>
//                 <Card.Img variant="top" src={img} />
//                 <Card.Body>
//                     <Card.Title>{name}</Card.Title>
//                     <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the cards content.
//                     </Card.Text>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                     <ListGroup.Item>warranty</ListGroup.Item>
//                     <ListGroup.Item>Free Shipping</ListGroup.Item>
//                     <ListGroup.Item>$ {price}</ListGroup.Item>
//                 </ListGroup>
//                 <Card.Body>
//                     <Link className="btn btn-warning"  >Buy</Link>
//                 </Card.Body>
//                 <ItemCount stock={stock} initial={1}/>
//             </Card>
//     )
// }

// export default ItemDetail