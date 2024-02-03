import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />          
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
