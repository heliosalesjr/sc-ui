import { useCart } from "../context/CartContext";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {

    const { cart } = useCart();
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)

    return ( 
        <header className="bg-white shadow-xl p-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-emerald-600">BuyMe!</h1>
            <div className="relative">
                <FaShoppingBasket className="text-2xl text-slate-500" />
                {
                    itemCount > 0 && <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {itemCount}
                    </span>
                }
            </div>
        </header>
     );
 

    }
export default Header;