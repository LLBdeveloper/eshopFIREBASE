import { useState } from "react"

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) setCount( prev => prev + 1)
    }

    const decrement = () => {
        if (count > 1) setCount( prev => prev - 1)
    }

    return (
        <div >
            <button className="btn  m-2 bg-secondary text-light" onClick={decrement}>-</button>
            <span className="fs-4">{count}</span>
            <button className="btn m-2 bg-secondary text-light"  onClick={increment}>+</button>
            <div>
                <button className="btn btn-success m-2 " onClick={()=> onAdd(count)} >Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount
///////////////////////////////////////////////////////////////////
// CONTADOR CON INPUT :
//
// const Input = ({onAdd, stock, initial=1}) => {
//     const [count, setCount] = useState(initial)
//
//     const handleChange = (e) => {
//         if(e.target.value <= stock) {
//             setCount(e.target.value)
//         }
//     }
//
// }
////////////////////////////////////////////////////////////////////