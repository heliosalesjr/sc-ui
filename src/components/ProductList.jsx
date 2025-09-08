import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from '../context/ProductContext'

const ProductList = ( ) => {
  const { products, loading, error } = useContext(ProductContext)
    
  return ( 
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

        {loading && <p>...Loads véi...</p>}
        {error && <div className="error">{error}</div>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
     );
}
 
export default ProductList;