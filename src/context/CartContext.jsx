/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

//the context
const CartContext = createContext();

//the provider
export function CartProvider( {children} ) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)

            if (existing) {
                return prev.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : item)
            }

            return [...prev, {...product, qty: 1}]
        })
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


//the custom hook for the provider
export function useCart() {
    return useContext(CartContext)
}