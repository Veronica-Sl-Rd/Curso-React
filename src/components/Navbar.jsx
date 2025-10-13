import '../css/Navbar.css'
import CartWidget from './CartWidget'

const Navbar = ()=> {
    return (
        <nav className= "nav-container">
            <a className="a-nav" href="">
                <img src= "../logo-versum.png" alt="logo" className='logo'/>
            </a>
            <a className="a-nav" href="">Nuevos</a>
            <a className="a-nav" href="">Ofertas</a>
            <a className="a-nav" href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    )
}
export default Navbar