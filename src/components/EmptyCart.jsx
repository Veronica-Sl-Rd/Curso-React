import React from "react"
import { Link } from "react-router-dom"
import "../css/EmptyCart.css"

const EmptyCart = () => {
    return (
        <div className="emptycart-container">
            <div className="emptycart-card">
                <i className="bi bi-bag-x fs-1 text-secondary mb-3"></i>
                <h1>Tu carrito está vacío</h1>
                <h3>Tu próxima historia te espera.</h3>
                <Link className="btn btn-dark mt-3" to='/'>Encontrala acá</Link>
            </div>
        </div>
    )
}
export default EmptyCart