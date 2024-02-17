import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/main/ItemDetailContainer'
import NotificactionProvider from './notification/NotificactionProvider'
import { CartProvider } from './components/main/CartContext'
import CartModalContainer from './components/main/CartModalContainer'
import Checkout from './components/main/Checkout'
// import Footer from './components/footer/Footer'
import Contact from './././pages/Contact'
import Location from './././pages/Location'
import AboutUs from './././pages/AboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <NavBar/>
              <NotificactionProvider>
                  <Routes>
                    <Route path='/' element={<ItemListContainer/>} />          
                    <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                    <Route path='/item/:productId' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<CartModalContainer/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/location' element={<Location/>} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                  </Routes>
              </NotificactionProvider>
            {/* <Footer/> */}
          </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
