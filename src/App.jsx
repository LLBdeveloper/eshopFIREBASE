import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/main/ItemDetailContainer'
// import EventAnimation from './components/main/EventAnimation'
import { CartProvider } from './components/main/CartContext'
import { useState } from 'react'
import { createContext } from 'react'



export const NotificationContext = createContext()

const Notification = ({type, message}) =>{
    const notificationStyle = {
      // position: 'absolute',
      // top: 100,
      // right: 50,
      backgroundColor: type === 'success' ? 'green' : 'red',
      color: 'white',
      padding: '10px 20px 10px 20px',
      borderRadius: 10,
      marginTop: '10px'
    }

    return (
      <div style={notificationStyle} >
        {message}
      </div>
    )
}





function App() {
  
  const [notificationData, setNotificationData] = useState({
    type: 'success',
    text: 'Bienvenido'
  })

  const setNotification = (type, text) => {
    setNotificationData({type, text})
  }



  return (
    <>
        <BrowserRouter>
        <NotificationContext.Provider value={{setNotification}} >
          <CartProvider>
            <NavBar/>
                        <Notification  type={notificationData.type} message={notificationData.text} />
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />          
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={'asd'} />
              <Route path='/checkout' element={'asd'} />
            </Routes>
            {/* <EventAnimation/> */}
            </CartProvider>
            </NotificationContext.Provider>
        </BrowserRouter>
    </>
  )
}

export default App
