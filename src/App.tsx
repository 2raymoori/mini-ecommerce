import { useEffect, useState } from 'react'
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
  const [email, setEmail] = useState<string | null>(null)
  const [shoppingCart, setShoppingCart] = useState([])

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true)
      setEmail(localStorage.getItem("email"))
    }
  }, [])

  return (
    <AppCntxt.Provider value={{ isLoggedIn, email, shoppingCart, setShoppingCart, setEmail, setIsLoggedIn }}>
      <main className='bg-orange-100'>
        <div className="max-w-5xl m-auto">
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
      </main>
    </AppCntxt.Provider>
  )
}
const NotFound = () => {
  return (
    <h1>Sorry The page you are looking for is not found...</h1>
  )
}

export default App
