import React from 'react'
import { useCart } from '../context/CartContext'


function CheckOut() {
  const {GetCartItemsWithProducts,getCartTotal,RemoveFromCart,updateQuantity} = useCart();

  const cartProducts = GetCartItemsWithProducts();
  const total = getCartTotal();

 

  return (
    <div className='flex flex-col items-start justify-start mt-10 p-10 gap-8 bg-gray-300'>
       <h3 className='font-bold text-2xl '>CheckOut</h3>
       <div className='flex gap-7'>
       <div className='flex flex-col items-start justify-start gap-3 p-4 bg-white  '>
          <h1 className='font-semibold text-xl '>Order Summary</h1>
          <div className='w-full space-y-4'>
              {cartProducts?.map((p)=>(
                <div className='flex gap-4 w-full' key={p.id}>
                  <img className='h-30 w-30 shrink-0' src={p.product.image} alt={p.product.name} />
                   <div className='min-w-0'>
                    <h2 className='font-bold '>{p.product.name}</h2>
                    <p className='text-sm '>${p.product.price} each</p>
                   </div>
                   <div className='ml-auto space-x-4'>
                       <button onClick={()=>updateQuantity(p.product.id,p.quantity-1)} className='bg-gray-200 px-3 py-1'>-</button>
                       <span>{p.quantity}</span>
                       <button onClick={()=>updateQuantity(p.product.id,p.quantity+1)} className='bg-gray-200 px-3 py-1'>+</button>
                       <div>
                            <p className='p-2 font-bold ml-10'>${(p.product.price*p.quantity).toFixed(2)}</p>
                       </div>
                       <button onClick={()=>RemoveFromCart(p.product.id)} className='bg-gray-500 text-white px-2 py-0.5 rounded-sm ml-10'>Remove</button>
                   </div>



                </div> 
              ))}
          </div>
       </div>
       <div className='flex flex-col gap-6 bg-white h-60 w-50 p-4'>
            <h1>Total</h1>
            <span>Subtotal:  <span className='font-bold'> {total.toFixed(2)}</span> </span>
            <span>Total: <span className='font-bold'></span>  {total.toFixed(2)}</span>
            <span className='border-b-2 block'></span>
            <button onClick={()=> alert("Order placed successfully")} className='bg-blue-500 text-white px-3 py-2 rounded-sm cursor-pointer '>Place Order</button> 

       </div>
       </div>

    </div>
  )
}

export default CheckOut