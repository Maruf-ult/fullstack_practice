
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({product}) {

  const {cartItems,AddToCart} = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLevel = productInCart ? `(${productInCart.quantity})` : "";


  return (
    <div className='m-2 border-white rounded-xl  bg-white w-56 '>
        <img className='rounded ' src={product.image} alt={product.name}  />
        <h1 className='font-semibold p-2'>{product.name}</h1 >
        <h2 className='font-bold text-blue-500 text-xl p-2'>${product.price}</h2>
        <div className='flex gap-2 p-2'>
            <Link   className='bg-gray-500 text-sm text-white px-2 py-2 rounded-sm cursor-pointer' to={`/products/${product.id}`}>View Details</Link>
            <button onClick={() => AddToCart(product.id)} className='bg-blue-500 text-sm text-white px-2 py-2 rounded-sm cursor-pointer'>Add to Cart {productQuantityLevel}</button>
        </div>
    </div>
  )
}
