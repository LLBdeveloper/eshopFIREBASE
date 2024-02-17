import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig' 

function ItemListContainer() {

    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

const { categoryId } = useParams()

    useEffect(()=>{
        setLoading(true)
        
        const productsRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot =>{
                const productsAdapted = snapshot.docs.map( doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },[categoryId])

    if(loading) {
        return (
            <div className="loading-spinner m-5 d-flex justify-content-center align-items-center flex-column" >
                <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                <h2 className=" m-5"> L o a d i n g  .   .   . </h2>                
            </div>
    )}   
    
    return (
        <Container className=" m-5 d-flex justify-content-center align-items-center ">
            <ItemList products={products}/>
        </Container>
    )
}

export default ItemListContainer