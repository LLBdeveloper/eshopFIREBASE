import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/main/ItemDetailContainer'
import EventAnimation from './components/main/EventAnimation'
import { createContext, useState } from 'react'

export const Context = createContext('valor inicial')

function App() {
  const [cart, setCart] = useState([])
console.log(cart)

  return (
    <>
    <Context.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />          
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:productId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={'asd'} />
            <Route path='/checkout' element={'asd'} />
          </Routes>
          <EventAnimation/>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App
