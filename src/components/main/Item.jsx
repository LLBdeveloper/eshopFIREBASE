// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ name, img, price}) => {


    return (
        <Card style={{ width: '18rem', margin: '1rem' }} bg="dark" data-bs-theme="dark" border="warning" >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price}</Card.Text>

                <button className="btn btn-warning">BUY</button>

            </Card.Body>
        </Card>
    );
}




export default Item


