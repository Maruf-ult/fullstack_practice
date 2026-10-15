import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/product';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  
  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
   const {cartItems,AddToCart} = useCart();

  console.log(id);

  useEffect(()=>{
    const findProduct = getProductById(id);
    console.log(findProduct);
    if(!findProduct){
       navigate("/");
    }else{
        setProduct(findProduct);
        setLoading(false);
    }

  },[id,navigate])
  
  if(loading){
    return(
        <div className='flex items-center justify-center h-64 mt-14'>
              <p className='text-gray-500 font-medium'>Product is loading.......</p>
        </div>

    )
  }

    const productInCart = cartItems.find((item) => item.id === product.id);
    const productQuantityLevel = productInCart ? `(${productInCart.quantity})` : "";
  
  
    return (
            <div className='flex items-start justify-center border-black mt-16 shadow-2xl ml-10 mr-10 gap-10 bg-white '>
            <img className='h-64 w-70 rounded-sm' src={product.image} alt={product.name} />
             <div className='flex flex-col text-black gap-4 mt-1'>
                 <h2 className='font-bold text-xl'>{product.name}</h2>
                 <h6 className='font-semibold text-xl text-blue-500'>${product.price}</h6>
                 <p className='font-light text-sm'>{product.description}</p>
                 <button onClick={() => AddToCart(product.id)} className='bg-blue-500 text-white w-24 py-2 text-sm rounded-sm cursor-pointer'>Add to Cart {productQuantityLevel}</button>
             </div>
            </div> 
  )
}

export default ProductDetails