import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CartItem from './CartItem'

export default function Cart() {
  const [cart,setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
  const [price, setPrice] = useState(cart.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue.price * currentValue.quant), 0))
  
    const handleCart = ()=>{
      setCart(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
      setPrice(cart.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue.price * currentValue.quant), 0))
    }

  useEffect(()=>{
    window.addEventListener('storage',handleCart())
  })
  
    
  return (
    <>
    <NavBar></NavBar>
    <div className='mycart'>
        <h1>Your Cart:</h1>
        {cart.length == 0 ? <p style={{textAlign:"center"}}>Your cart is empty!</p> : <></>}
        {cart.map((el)=>{
            return <CartItem name = {el.name} price = {el.price} img = {el.img} quant = {el.quant}/>
        })}
        <hr></hr>
        <h2>Total price: $US {price.toFixed(2)}</h2>
    </div>
    
    </>
  )
}
