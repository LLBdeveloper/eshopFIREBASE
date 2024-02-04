import { useState } from "react";
import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    // const [inputType, setInputType] = useState('input')
    const [quantity, setQuantity] = useState(0)
    
    // const ItemCount = inputType === 'input' ? Input : ButtonCount
    
    const handleOnAdd = (count) => {
        // const prodctToAdd = {
        //     id, name, price, count
        // }
        console.log(`se agregaron ${count} ${name}`)

        setQuantity(count)
    }

    return (
        <Card key={id} style={{ width: '18rem', margin: '3rem' }}>
                {/* <button onClick={()=> setInputType(inputType === 'input' ? 'buton' : 'input')} >cambiar contador</button> */}
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{category}</ListGroup.Item>
                    <ListGroup.Item>Free Shipping</ListGroup.Item>
                    <ListGroup.Item>$ {price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                {
                quantity === 0 ? ( <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                ) :(
                    <button className="btn btn-warning">FINALIZAR COMPRA</button>
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