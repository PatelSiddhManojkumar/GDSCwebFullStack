import React from 'react'
import image from "../assets/gpu.jpg"
import {Card} from './Card'


function House() {
  return (
    <div className='flex flex-row'>
       <Card image={image} title={"Rtx 4090"} price={500} rating={98}/>
       <Card image={image}/>
       <Card image={image}/>
       <Card image={image}/>
       <Card image={image}/>
    </div>
  )
}

export default House