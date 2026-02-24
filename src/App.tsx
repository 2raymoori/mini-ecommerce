import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import ProductList from './Pages/ProductList'
import Contact from './Pages/Contact'
import Nav from './CustomComponents/Nav'
import Auth from './Pages/Auth'
import AppCntxt from './appContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [shoppingCart, setShoppingCart] = useState([])
  return (
    <AppCntxt.Provider value={{ isLoggedIn, email, shoppingCart, setShoppingCart, setEmail, setIsLoggedIn }}>

      <div className="bg-orange-100 max-w-5xl m-auto">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Contact />} />
          <Route path="/checkout" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </AppCntxt.Provider>
  )
}
const NotFound = () => {
  return (
    <h1>Sorry The page you are looking for is not found...</h1>
  )
}

export default App
