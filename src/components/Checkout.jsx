import React, { useContext, useState } from 'react'
import "../css/Checkout.css"
import { CartContext } from "../context/CartContext"
import { db } from "../service/firebase"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import EmptyCart from "../components/EmptyCart"
import { useForm } from 'react-hook-form'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clear}= useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

    console.log(errors, "errors")
    const finalizarCompra = (dataForm) => {
        setLoading(true)
        console.log(dataForm, "data")

        let order = {
            comprador: {
                nombre: dataForm.nombre,
                apellido: dataForm.apellido,
                direccion: dataForm.direccion,
                mail: dataForm.mail
            },
            compra: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const ventas= collection(db, "orders")
        addDoc(ventas, order)
        .then((res)=> {
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

    return (
    <>
    {
    orderId 
    ? <div className="d-flex justify-content-center align-items-center" style={{minHeight: "70vh"}}>
        <div className="card shadow p-5 text-center" style={{maxWidth: "500px"}}>
            <h1 className="mb-3">COMPRA EXITOSA</h1>
            <h2 className="mb-4">¡Muchas gracias por elegirnos!</h2>
            <h4 className="mb-4">Tu orden de compra es: </h4>
            <span className="badge bg-primary fs-5 mb-4">{orderId}</span>
            <Link className="btn btn-dark mt-3" to="/">Volver a Home</Link>
        </div>
    </div>

    : <form className='formulario'onSubmit={handleSubmit(finalizarCompra)}>
        <h1> Completa con tus datos</h1>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
            <input type="text" className="form-control" name='nombre' id="formGroupExampleInput" placeholder="Ingresá aquí tu nombre..." {...register("nombre", {required:true, minLength:3})}/>
            {errors?.nombre?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>El campo nombre es obligatorio</span>}
            {errors?.nombre?.type === "minLength" && <span style={{color:'red', fontWeight:'bold'}}>El nombre debe contener al menos 3 caracteres</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Apellido</label>
            <input type="text" className="form-control" name='apellido' id="formGroupExampleInput2" placeholder="Ingresá aquí tu apellido..."  {...register("apellido", {required:true, minLength:3})}/>
            {errors?.apellido?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>El campo apellido es obligatorio</span>}
            {errors?.apellido?.type === "minLength" && <span style={{color:'red', fontWeight:'bold'}}>El apellido debe contener al menos 3 caracteres</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Direccion</label>
            <input type="text" className="form-control" name='direccion' id="formGroupExampleInput3" placeholder="Ingresá aquí tu dirección..." {...register("direccion", {required:true, minLength:5})}/>
            {errors?.direccion?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>El campo direccion es obligatorio</span>}
            {errors?.direccion?.type === "minLength" && <span style={{color:'red', fontWeight:'bold'}}>La direccion debe contener al menos 5 caracteres</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput4" className="form-label">Mail</label>
            <input type="text" className="form-control" name='mail' id="formGroupExampleInput4" placeholder="Ingresá aquí tu mail..." {...register("mail", {required:true})} />
            {errors?.mail?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>Por favor completa el campo mail</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput5" className="form-label">Repetí tu mail</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Por favor, repetí tu mail aquí..." {...register("secondemail", {required:true, validate:{equalsMails: mail2=> mail2 === getValues().mail}})} />
            {errors?.secondemail?.type === "required" && <span style={{color:'red', fontWeight:'bold'}}>Por favor repite tu mail</span>}
            {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red', fontWeight:'bold'}}>Los correos no coinciden</span>}
        </div>
        <button type="submit" className="btn btn-dark" disabled={loading}> {loading ? 'Procesando compra...' : 'Completar Compra'}</button>
    </form>
    }
    </>
    )
}

export default Checkout