import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price}) => {
    return (
        <Card  className='m-3 col-12 col-md-6 col-lg-3' bg="dark" data-bs-theme="dark" border="warning">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <Card.Img className='border border-warning' variant="top" src={img} style={{maxWidth: '10rem',}} />
                <Card.Title className='mt-3'>{name.toUpperCase()}</Card.Title>
                <div className="mt-auto">
                    <Card.Text className='fs-3 fw-bold'>$ {price}</Card.Text>
                    <Link className="btn btn-warning" to={`/item/${id}`} >Detail</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Item;