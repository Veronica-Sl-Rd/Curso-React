import '../css/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {
    return (
        <nav className= "nav-container">
            <NavLink className="a-nav" to='/'>
                <img src= "../logo-versum.png" alt="logo" className='logo'/>
            </NavLink>
            <button 
                className="burger" 
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu">
                ☰
            </button>
            <div className={`links-container ${open ? "active" : ""}`}>
            <NavLink className="a-nav" to='/category/nuevos'>Nuevos</NavLink>
            <NavLink className="a-nav" to='/category/ofertas'>Ofertas</NavLink>
            <NavLink className="a-nav" to='/category/mas vendidos'>Mas Vendidos</NavLink>
            <NavLink className="a-nav" to='/category/clasicos'>Clásicos</NavLink>
            <CartWidget/>
            </div>
        </nav>
    )
}
export default Navbar