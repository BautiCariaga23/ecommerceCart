import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard(props) {
    const [hover, setHover] = useState(false)
  return (
    <Link to={`product-detail?name=${props.name}&rating=${props.rating}&img=${props.imgHover}&price=${props.price}`}>
    <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className='card'>
        <img className='img' src={`${hover ? props.imgHover : props.img}`}></img>
        <div className='line'>
            <h1>{props.name}</h1>
            <p>⭐ {props.rating} Stars</p>
        </div>
        <h2>$US {props.price}</h2>
    </div>
    </Link>
  )
}
