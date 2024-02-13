import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartModalContainer from '../main/CartModalContainer';
import {collection, getDocs, query, orderBy} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'


function NavBar() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        getDocs(categoriesRef)
            .then(snapshot =>{
                const categoriesAdapted = snapshot.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
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
                                <Link className="btn btn-warning m-2 d-flex justify-content-center align-items-center" key={cat.id} to={`/category/${cat.slug}`}>{cat.label}</Link>
                            )
                        })}
                        <CartModalContainer  />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;