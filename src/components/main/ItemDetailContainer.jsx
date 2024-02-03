
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getProductsById } from '../../mocks/asyncMock';
import { ClipLoader } from "react-spinners";


function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const[loading, setLoading] = useState(true)


    useEffect(() => {
        getProductsById('2')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    })
    
    if(loading) {
        return (
            <div className="loading-spinner m-5" >
                <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                <h2 className=" m-2"> L o a d i n g  .   .   . </h2>                
            </div>
    )}

    return (
        <Card style={{ width: '18rem', margin: '3rem' }}>
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
                {/* <Card.Link href="#">Sumar al carrito</Card.Link>
                <Card.Link href="#">Restar del carrito</Card.Link> */}
                <Button variant="success m-2">Buy</Button>
                <Button variant="secondary m-2">Add to cart</Button>

            </Card.Body>
        </Card>
    );
}

export default ItemDetailContainer;



