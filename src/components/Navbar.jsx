import { useState } from 'react'
import '../css/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {

    const [open, setOpen] = useState(false)

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
            <NavLink className="a-nav" to='/category/nuevos' onClick={() => setOpen(false)}>Nuevos</NavLink>
            <NavLink className="a-nav" to='/category/ofertas' onClick={() => setOpen(false)}>Ofertas</NavLink>
            <NavLink className="a-nav" to='/category/mas vendidos' onClick={() => setOpen(false)}>Mas Vendidos</NavLink>
            <NavLink className="a-nav" to='/category/clasicos' onClick={() => setOpen(false)}>Clásicos</NavLink>
            <CartWidget onClick={() => setOpen(false)}/>
            </div>
        </nav>
    )
}
export default Navbar