import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/CartView.css";
import Swal from "sweetalert2";

const CartView = () => {
    const { cart, addItem, removeItem, removeUnit, clear, total } = useContext(CartContext);
    const preconfirm = () => {
        Swal.fire({
            title: "¿Estás seguro que deseas borrar todo del carrito?",
            text: "¡Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "rgba(122, 122, 122, 1)",
            confirmButtonText: "SI, borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
            }})
    };
    return (
        <div className="cartview-container">
            <h1>
                Tu carrito <span className="bi bi-bag fs-1 text-secondary mb-3"></span>
            </h1>
            <div className="cart-items">
                {cart.map((compra) => (
                    <div key={compra.id} className="cart-item card shadow-sm">
                        <img src={compra.img} alt={compra.name} className="cart-item-img" />
                        <div className="cart-item-info">
                            <h5>{compra.name}</h5>
                            <p>Precio Unitario: ${compra.price},00</p>
                            <div className="d-flex align-items-center gap-2">
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => removeUnit(compra.id)}>
                                    -
                                </button>
                                <p className="m-0">Cantidad: {compra.quantity}</p>

                                <button className="btn btn-outline-secondary btn-sm" onClick={() => addItem(compra, 1)}>
                                    +
                                </button>
                        </div>
                        <p className="fw-bold">
                            Precio Final: ${compra.quantity * compra.price},00
                        </p>
                        </div>
                        <button className="btn btn-danger btn-sm cart-delete-btn" onClick={() => removeItem(compra.id)}>
                        X
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-footer card shadow-sm">
                <h4>Total a pagar: $ {total()},00</h4>
                <div className="cart-footer-buttons">
                    <button className="btn btn-outline-dark" onClick={preconfirm}>
                        Vaciar carrito
                    </button>
                    <Link className="btn btn-primary" to="/checkout">
                        Terminar compra
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CartView;
