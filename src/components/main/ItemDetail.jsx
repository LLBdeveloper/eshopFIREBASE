import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";


const ItemDetail = (product) => {

    const handleOnAdd = (quantity) => {

        console.log(`se agregaron ${quantity} ${product.name}`)
    }

    return (
        <Card key={product.id} style={{ width: '18rem', margin: '3rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>warranty</ListGroup.Item>
                    <ListGroup.Item>Free Shipping</ListGroup.Item>
                    <ListGroup.Item>$ {product.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Link className="btn btn-warning"  >Buy</Link>
                </Card.Body>
                <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd}/>
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