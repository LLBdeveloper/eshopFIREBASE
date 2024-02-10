import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/main/ItemDetailContainer'
import NotificactionProvider from './notification/NotificactionProvider'
import { CartProvider } from './components/main/CartContext'
import CartModal from './components/main/CartModal'
import Checkout from './components/main/Checkout'


function App() {

  return (
    <>
      <BrowserRouter>
        <NotificactionProvider>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />          
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<CartModal/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
            {/* <CartModal/> */}
          </CartProvider>
        </NotificactionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
