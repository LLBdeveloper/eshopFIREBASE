// import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCart } from "./CartContext";
// import { Link } from "react-router-dom";
import { useNotificacion } from "../../notification/NotificactionProvider";
import CardText from "react-bootstrap/esm/CardText";

const ItemDetail = ({id, name, img, img2, img3,category, description, price, stock}) => {

    const {addItem, isInCart, getProductQuantity} = useCart()
    const {setNotification} = useNotificacion()//se puede exportar el context pero esta hecho con customHooks// asi es del modo tradicional: useContext(NotificationContext) y eso arriba: import { NotificationContext } from "../../notification/NotificactionProvider"; import { useCart } from "./CartContext";

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, stock
        }
        addItem(productToAdd) 
        setNotification('success',`Se agrego correctamente ${quantity} ${name}`)
    }


    const productQuantity = getProductQuantity(id)

console.log(isInCart)// BORRARRRRRRRRRRR es SOLO PARA Q NO DE ERORR DE Q NO USO ISINCART




    return (
        <Card key={id} style={{ width: '40vw', margin: '3rem', textAlign: 'center' }} >
                <Card.Body>
                    <Card.Title className="fs-3 mb-3">{name.toUpperCase()}</Card.Title>
                    <CardText>Categoria: {category}</CardText>
                        <Carousel >
                            <Carousel.Item >
                                <Card.Img src={img} alt="foto del producto 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={img2} alt="foto del producto 2" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={img3} alt="foto del producto 3" />
                                
                            </Carousel.Item>
                        </Carousel>
                    <Card.Text className='mt-3'>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='mt-3 fs-5'>Free Shipping </ListGroup.Item>
                    <ListGroup.Item className='mb-3 mt-3 fs-3 fw-bold'>Price $ {price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {stock <= 0 ? (
                        <p>SIN STOCK</p>
                    ) : (
                        // isInCart(id) ? (
                        //     <div className=' '>
                        //         <Link to='/checkout' className="btn btn-success m-2 p-3">FINISH PURCHASE</Link>
                        //         <Link to='/' className="btn btn-warning m-2 p-3">SEE MORE PRODUCTS</Link>
                        //     </div>
                        // ) : (
                            <ItemCount stock={stock} initial={productQuantity || 1} onAdd={handleOnAdd}/>
                        // )
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