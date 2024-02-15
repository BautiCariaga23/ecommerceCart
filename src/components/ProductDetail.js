import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import NavBar from './NavBar'
import items from "./items.json"

export default function ProductDetail() {
    const [getParams, setParams] = useSearchParams()
    const [quantity, setQuantity] = useState(1)
    const [color , setColor] = useState("")
    //getParams.get("name")
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    let isthere
  return (
    <>
    <NavBar></NavBar>
    <div className='productD'>
        <img className='productImg' src={getParams.get("img")}></img>
        <div className='detail'>
        <div>
        <h1 id='title'>{getParams.get("name")}</h1>
        <h2>$US {getParams.get("price")}</h2>
        <p>Can be Delivered to your country!</p>
        </div>
        <div className='lineB'>
        <Link to = "/cart"><button id = "add" onClick={()=>{
            cart.map((el)=>{
                if(el.name == getParams.get("name")){
                    el.quant+=quantity
                    isthere = true
                }else{
                    if(isthere != true)isthere = false;
                    
                }
            })
            if(!isthere)cart.push({"name":getParams.get("name"), "price":getParams.get("price"), "img":getParams.get("img"), "quant":quantity})
            localStorage.setItem("cart",JSON.stringify(cart))
        }}>Add to Cart</button></Link>
        <div id='quantity'>
            <button onClick={()=>{
                setQuantity(quantity > 1 ? quantity-1 : 1)
            }}>
                <h3>-</h3>
            </button>
            <h2>{quantity}</h2>
            <button onClick={()=>{
                setQuantity(quantity < 9 ? quantity+1 : 1)
            }}>
                <h3>+</h3>
            </button>
        </div>
        </div>
        <div>
        <label>Colour</label>
        <br/>
        <select>
            <option>Black</option>
            <option>White</option>
            <option>Gray</option>
        </select>
        
        <br/>
        <label>Size</label>
        <br/>
        <select >
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
        </select>
        </div>
        <div className='desc'>
            <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
    </div>
    </>
  )
}
