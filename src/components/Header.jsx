import { useState } from 'react';
import { useCart } from "../context/CartContext";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    const { cart, removeFromCart, clearCart } = useCart();
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)

    

    return ( 
        <header className="bg-white shadow-xl p-4 flex justify-between items-center">
           <h1 className="text-2xl font-semibold text-emerald-600">BuyMe!</h1> 
            <div className="relative">
                <button className="cursor-pointer" onClick={ () => setShowDropDown(!showDropDown)}>
                    <FaShoppingBasket className="text-2xl text-slate-500" />
                    {
                        itemCount > 0 && <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {itemCount}
                        </span>
                    }
                </button>
                {
                    showDropDown && (
                        <div className='absolute right-0 mt-2 w-80 bg-white border border-slate-500 rounded shadow-xl z-50'>
                            <div className='p-4'>
                                <h2 className='font-semibold text-lg mb-2'>My items</h2>
                                { cart.length === 0 ? <p>Your cart is empty!!!</p> :
                                
                                    (
                                        <>
                                            <ul className='max-w-60 overflow-y-auto divide-y divide-pink-200'>
                                                {
                                                    cart.map((item) => (
                                                        <li key={item.id} className='flex justify-between items-center p-2'>
                                                            <div>
                                                                <p className='font-semibold text-pink-600'>{item.name}</p>
                                                                <p className='text-sm text-slate-400'>{item.qty} x ${item.price}</p>
                                                                
                                                            </div>
                                                            
                                                            <button className="text-red-600" onClick={ () => removeFromCart(item.id)}>remove</button>
                                                            
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className='mt-4 flex justify-between font-semibold'>
                                                <span>Total:</span>
                                                <span>${total}</span>
                                                
                                            </div>
                                            <button onClick={clearCart} className='flex justify-end pt-4 text-slate-500 text-sm hover:text-pink-600'>Clear cart</button>
                                        </>
                                    )
                                }
                            </div>
                        </div>

                    )
                }
            </div>
        </header>
     );
 

    }
export default Header;