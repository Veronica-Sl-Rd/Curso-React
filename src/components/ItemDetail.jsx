import React from "react"
import ItemCount from "../components/ItemCount"
import "../css/ItemDetail.css"

const ItemDetail = ({detalle}) => {
    return (
        <div className="contenedor-detalle">
            <div className="detalle-img">
                <img src={detalle.img} alt={detalle.name}/>
            </div>
            <div className="detalle-info">
                <h1>Título: {detalle.name}</h1>
                <p className="descripcion">{detalle.description}</p>
                <p className="precio">${detalle.price}</p>
                <div className="comprar">
                    <ItemCount/>
                    <button className="btn-comprar">Comprar</button>
                </div>
            </div>
        </div>
    ) 
}

export default ItemDetail