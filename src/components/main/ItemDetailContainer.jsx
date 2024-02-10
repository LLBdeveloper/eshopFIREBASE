import { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig'

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, 'products', productId)
        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const data = snapshot.data()
                const productAdapted = {id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })

    },[productId])
    if(loading) {
        return (
            <div className="loading-spinner m-5" >
                <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                <h2 className=" m-2"> L o a d i n g  .   .   . </h2>                
            </div>
    )}



    return (
        <div>
            <ItemDetail  {...product}/>
        </div>
    );
}

export default ItemDetailContainer;



