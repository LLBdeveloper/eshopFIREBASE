// import { useState } from "react";
import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotificationContext } from "../../App";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const {addItem, isInCart} = useCart()
    const {setNotification} = useContext(NotificationContext)

    const handleOnAdd = (count) => {
        const productToAdd = {
            id, name, price, count
        }
        console.log(`se agregaron ${count} ${name}`)/
        addItem(productToAdd) 
        setNotification(`success','Se agrego correctamente ${count} ${name}`)

    }


    return (
        <Card key={id} style={{ width: '18rem', margin: '3rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Categoria: {category}</ListGroup.Item>
                    <ListGroup.Item>Envio: Free Shipping</ListGroup.Item>
                    <ListGroup.Item>Precio $ {price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                {
                    isInCart(id) ?  ( <Link to='/cart' className="btn btn-warning">FINALIZAR COMPRA </Link>
                    ):( <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }
                </Card.Body>
            </Card>
    )
}

export default ItemDetail




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