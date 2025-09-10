/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

//the context
const CartContext = createContext();

//the provider
export function CartProvider( {children} ) {
    const [cart, setCart] = useState( () => { 
        const stored = localStorage.getItem('cart')
        return stored ? JSON.parse(stored) : []
    })

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)

            if (existing) {
                return prev.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : item)
            }

            return [...prev, {...product, qty: 1}]
        })
    }

    const clearCart = () =>{
        setCart([])
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )


}



//the custom hook for the provider
export function useCart() {
    return useContext(CartContext)
}