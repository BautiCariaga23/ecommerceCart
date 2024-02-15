import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import items from "./items.json"
import SearchCard from './SearchCard'

export default function NavBar() {
    const [search, setSearch] = useState("")
  return (
    <div onMouseLeave={()=>{setSearch("")}} className='navbar'>
        <Link to={"/"}><h1>My Shop</h1></Link>
        <div>
            <input type='text' onClick={(e)=>{setSearch(e.target.value)}} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Something like "Hoodie"'></input>
        <div>
            {search != "" ? 
            <div className='black'>
                {items.map((el)=>{
                  return el.name.toUpperCase().includes(search.toUpperCase()) ? <Link to={`/product-detail?name=${el.name}&rating=${el.rating}&img=${el.imgHover}&price=${el.price}`}><SearchCard name = {el.name} img = {el.img}/></Link> : <></>
                })}
            </div>
             : <div></div>}
        </div>
        </div>
        
        <Link to = {"/cart"}><button><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg><div className='cartL'>{localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0}</div></button></Link>
    </div>
  )
}
