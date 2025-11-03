import React from "react"
import { getOneProduct } from "../mock/AsyncService"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[detalle, setDetalle] =useState({})
    
    const {id}=useParams()

    useEffect(()=> {
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[])

    return (
        <>
        <ItemDetail detalle={detalle}/>
        </>
    )
}

export default ItemDetailContainer