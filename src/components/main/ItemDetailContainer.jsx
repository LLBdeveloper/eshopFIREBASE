
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function ItemDetailContainer({ title, thumbnail, price}) {

    
    return (
        <Card style={{ width: '18rem', margin: '3rem' }}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>warranty</ListGroup.Item>
                <ListGroup.Item>Free Shipping</ListGroup.Item>
                <ListGroup.Item>$ 499{price}</ListGroup.Item>
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



