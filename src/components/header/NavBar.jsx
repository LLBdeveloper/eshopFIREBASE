import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getCategories } from '../../mocks/asyncMock';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../main/CartModal';
// import CartWidget from '../main/CartWidget';

function NavBar() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
            .then(response => {
                setCategories(response)
                
        })
    },[])

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='text-warning' >FREE MARKET</Link>
                    <Nav className="me-auto p-2">
                        {categories.map(cat =>{
                            return (
                                <Link className="btn btn-warning m-1 " key={cat.id} to={`/category/${cat.slug}`}>{cat.description}</Link>
                            )
                        })}
                        <CartModal  />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;