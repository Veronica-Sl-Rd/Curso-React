import React from "react"
//import { getOneProduct } from "../mock/AsyncService"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import Loader from "./Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemDetailContainer = () => {
    const[detalle, setDetalle] =useState({})
    const[cargando, setCargando]= useState(false)
    const{invalid, setInvalid} = useState(null)
    
    const {id}=useParams()
    useEffect(()=> {
        setCargando(true)
        const docRef = doc(db, "productos",id)
        getDoc(docRef)
        .then((res)=> 
        {if(res.data()) {
            setDetalle({id:res.id, ...res.data()})
        } else {
            setInvalid(true)
        }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    
    },[id])

    if(invalid) {
        return (
        <div>
            <h1> El producto no existe! </h1>
            <Link className='btn btn-dark' to='/'>Volver a home</Link>
        </div>)
    }

    return (
        <>
        {
        cargando ? <Loader texto="Cargando detalle del producto"/>: 
        <ItemDetail detalle={detalle}/>
        }
        </>
    )
}

export default ItemDetailContainer