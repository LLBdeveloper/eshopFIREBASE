import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { ClipLoader } from "react-spinners";
import { getProducts, getProductsByCategory } from "../../mocks/asyncMock";
import { useParams } from "react-router-dom";



function ItemListContainer() {

    const[products, setProducts] = useState([])
    // const[input, setInput] = useState("ofertas")
    const[loading, setLoading] = useState(true)



const { categoryId } = useParams()

    useEffect(()=>{
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        setLoading(true)
        asyncFunction(categoryId)            
            .then(response => {
                setProducts(response) 
            })    
            .catch(error => {
                console.log(error)
            })    
            .finally(()=>{
                setLoading(false)
            })
    },[categoryId])

    if(loading) {
        return (
            <div className="loading-spinner m-5" >
                <ClipLoader size={300} color={"#ffff00"} loading={loading} />
                <h2 className=" m-2"> L o a d i n g  .   .   . </h2>                
            </div>
    )}   
    
    return (
        <div >
            {/* <input value={input} onChange={(e)=> setInput(e.target.value)} className="m-5" /> */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer

