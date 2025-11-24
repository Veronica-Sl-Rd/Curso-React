import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(carritoLS)

    useEffect(()=> {
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])
    

    //Agregar al carrito
    const addItem = (item, qty) => {
        if(isInCart(item.id)) {
            setCart(cart.map((prod)=> {
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                } else {return prod}
            }))
        } else {
        setCart([...cart, {...item, quantity:qty}])
    }}
    //Eliminar item del carrito
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //Eliminar unidad de item si hay mas de una
    const removeUnit = (id) => {
    setCart(cart.map(prod => {
        if (prod.id === id) {
            if (prod.quantity > 1) {
                return { ...prod, quantity: prod.quantity - 1 }
            }}
        return prod
    }))
}

    //Borrar todo del carrito
    const clear = () => {
        setCart([])
    }
    //Verificar que un item está en el carrito
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }
    //Calcular el precio total
    const total = () => {
        return cart.reduce((acc, prod)=>(acc += prod.quantity * prod.price),0)
    }
    //Calcular suma de cantidades
    const cartQuantity = () => {
        return cart.reduce((acc, prod)=>(acc += prod.quantity),0)
    }
    //
    const itemQuantity = (id)=> {
        const itemInCart = cart.find((prod)=> prod.id === id)
        if(itemInCart){
            return itemInCart.quantity
        } else {
            return 0
        }
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, removeUnit, clear, isInCart, total, cartQuantity, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}