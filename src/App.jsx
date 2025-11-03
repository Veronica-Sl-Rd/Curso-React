import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo= 'Bienvenido a VERSUM. El portal a tu próxima historia'/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:type' element={<ItemListContainer saludo= 'Echa un vistazo a nuestros títulos '/>}/>
    
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App