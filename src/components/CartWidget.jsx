import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cartQuantity, cart} = useContext(CartContext)
    return (
        <Link to="/cart">
            <i className= "bi bi-cart fs-4 text-light"></i>
            {cart.length > 0 && <span className="badge bg-danger rounded-pill">{cartQuantity()}</span>}
        </Link>
    )
}

export default CartWidget