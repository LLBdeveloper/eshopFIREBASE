import { createContext, useState, useContext } from 'react'

const CartContext = createContext('valor inicial')

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        } else {
            alert('No se agrega por que ya esta en el carrito')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    

    const removeItem = (id) => {
        const updateCart = cart.filter(prod=> prod.id !== id)
        setCart(updateCart)
    }

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () =>{
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, removeItem, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>

    )
}



export const useCart = () => {
    return useContext(CartContext)
}
