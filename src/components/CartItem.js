import React, { useEffect, useState } from 'react'

export default function CartItem(props) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    const [quantity, setQuantity] = useState(props.quant)
    useEffect(()=>{
        cart.map((el)=>{
            if(el.name == props.name){
                setQuantity(el.quant)
            }
         })
    })
    
  return (
    <div className='cart'>
        <div className='cartItem'>
        <img src={props.img}></img>
        <div>
        <h2>{props.name}</h2>
        <h3>$US {(props.price * quantity).toFixed(2)}</h3>
        </div>
        <div className='quantityCart'>
        <button onClick={()=>{
            setQuantity(quantity > 1 ?quantity-1 : 1)
            cart.map((el)=>{
                if(el.name == props.name && el.quant > 1){
                    el.quant = el.quant-1
                }
             })
             localStorage.setItem("cart", JSON.stringify(cart))
        }
           
            }>-</button>
        <h4>{quantity} items</h4>
        <button onClick={()=>{
             setQuantity(quantity < 99 ?quantity+1 : 9)
             cart.map((el)=>{
                if(el.name == props.name && el.quant <99){
                    el.quant = el.quant+1
                }
             })
             localStorage.setItem("cart", JSON.stringify(cart))
        }
            }>+</button>
            <button onClick={()=>{
                 cart.map((el,i)=>{
                    if(el.name == props.name){
                        cart.splice(i,1)
                    }
                 })
                 localStorage.setItem("cart", JSON.stringify(cart))
            }}>X</button>
        </div>
        </div>
    </div>
  )
}
