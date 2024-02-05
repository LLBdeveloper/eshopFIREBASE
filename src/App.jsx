import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/main/ItemDetailContainer'
// import EventAnimation from './components/main/EventAnimation'
import { CartProvider } from './components/main/CartContext'

function App() {
  
  return (
    <>
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />          
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={'asd'} />
              <Route path='/checkout' element={'asd'} />
            </Routes>
            {/* <EventAnimation/> */}
            </CartProvider>
        </BrowserRouter>
    </>
  )
}

export default App
