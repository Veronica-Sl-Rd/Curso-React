import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'



function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo= 'Bienvenido a VERSUM. El portal a tu próxima historia'/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:type' element={<ItemListContainer saludo= 'Echa un vistazo a nuestros títulos '/>}/>
      <Route path="/cart" element={<CartContainer/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
    </Routes>
    </CartProvider>
    
    </BrowserRouter>
  )
}

export default App