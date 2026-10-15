import React, { createContext, useContext, useState } from 'react'
import { getProductById } from '../data/product';


const CartContext = createContext();

export default function CartProvider ({children}) {
   
const [cartItems,setCartItems] = useState([]);
  

  function AddToCart(productId){
     const existing = cartItems.find((item) => item.id == productId);
     if(existing){
        const quantity = existing.quantity;
        const updatedCartItems= cartItems.map((item) => item.id == productId?{id:productId,quantity:quantity+1}:item);
         setCartItems(updatedCartItems);
     }  else{
        setCartItems([...cartItems,{id:productId,quantity:1}]);
     }    
  }

  function GetCartItemsWithProducts(){
   return cartItems.map((item) => ({
      ...item,product:getProductById(item.id),
   }))
   .filter((item) => item.product);
  }

  function RemoveFromCart(productId){
   setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId,quantity){
   if(quantity<=0){
      RemoveFromCart(productId);
      return;
   }
   setCartItems(cartItems.map((item) => item.id == productId?{...item,quantity}:item));
  }

  function getCartTotal(){
   return GetCartItemsWithProducts().reduce((total,item) => total + item?.product?.price * item?.quantity,0);
  }
  
    return (
    <CartContext.Provider value={{cartItems,AddToCart,GetCartItemsWithProducts,RemoveFromCart,updateQuantity,getCartTotal}}>
           {children}
    </CartContext.Provider>
  )
}

export function useCart(){
    const context = useContext(CartContext);
    return context;
}