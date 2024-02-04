import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({ id, name, img, price}) => {


    return (
        <Card style={{ width: '18rem', margin: '1rem' }} bg="dark" data-bs-theme="dark" border="warning" >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price}</Card.Text>

                <Link className="btn btn-warning" to={`/item/${id}`} >Buy</Link>

            </Card.Body>
        </Card>
    );
}




export default Item


