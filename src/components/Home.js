import React from 'react'
import items from "./items.json"
import ItemCard from './ItemCard';
import NavBar from './NavBar';
export default function Home() {
  return (
    <>
      <NavBar></NavBar>
    <main>
      <div className='offers'>
      <h1 className='title'>Start with Style</h1>
      </div>
      <div className='list'>
        <h2>Featured</h2>
        <div className='grid'>
          {items.map((el)=>{
            return <ItemCard name = {el.name} price = {el.price} rating = {el.rating} votes = {el.votes} imgHover = {el.imgHover} img = {el.img}></ItemCard>
          })}
        </div>
      </div>
    </main>
    </>
  )
}
