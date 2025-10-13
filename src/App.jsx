import Navbar from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer saludo= 'Bienvenido a VERSUM. El portal a tu próxima historia'/>
    </>
  )
}

export default App