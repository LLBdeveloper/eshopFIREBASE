import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartModalContainer from '../main/CartModalContainer';
import {collection, getDocs, query, orderBy} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import Image from 'react-bootstrap/Image';


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
            <Navbar bg="dark" data-bs-theme="dark"  >
                <Container  >
                    <Navbar.Brand className='me-5' >
                            <Link  to="/" className='text-warning text-center text-5' > 
                                <Image className='me-1' src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/cifrado.png?alt=media&token=d067a5e5-357e-4fca-86ab-ab4d71683a92" alt="logo" fluid/>
                                GAMMER GEAR 
                            </Link>
                    </Navbar.Brand>

                    <Nav className="me-auto p-2 " >
                        {categories.map(cat =>{
                            return (
                                <Link className="btn btn-warning m-2 d-flex justify-content-center align-items-center" key={cat.id} to={`/category/${cat.slug}`}>{cat.label}</Link>
                            )
                        })}
                    </Nav>
                        <CartModalContainer className="justify-content-end" />
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;