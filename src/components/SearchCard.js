import React from 'react'

export default function SearchCard(props) {
  return (
    <div className='flex'>
        <img className='imgsearch' src={props.img}></img>
        <p>{props.name}</p>
    </div>
  )
}
