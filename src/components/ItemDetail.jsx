import React, { useState } from 'react'
import ItemCount from '../components/ItemCount'
import '../css/ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({detalle}) => {
    const {cart, addItem, itemQuantity} = useContext(CartContext)

    const [purchase, setPurchase] = useState(false)
    console.log(cart)

    const onAdd = (cantidad) => {
        setPurchase(true)
        addItem(detalle, cantidad)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            html: `Agregaste <span style="font-weight:700; font-size:1.2rem; color:#4d99e6;">
                ${detalle.name} </span> al carrito`,
            showConfirmButton: false,
            timer: 1500
});
    }

    const stockActualizado = detalle.stock - itemQuantity(detalle.id)
    return (
        <div className="contenedor-detalle">
            <div className="detalle-img">
                <img src={detalle.img} alt={detalle.name}/>
            </div>
            <div className="detalle-info">
                <h1>Título: {detalle.name}</h1>
                <p className="descripcion">{detalle.description}</p>
                <p className="precio">${detalle.price},00</p>
                <p className="stock">Stock Disponible: {stockActualizado}</p>
                <div className="comprar">
                    {purchase ? <Link className='btn btn-dark' to= "/cart">Finalizar Compra</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    ) 
}

export default ItemDetail