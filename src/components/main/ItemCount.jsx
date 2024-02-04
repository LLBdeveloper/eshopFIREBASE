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
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=> onAdd(count)} >Agregar al carrito</button>
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