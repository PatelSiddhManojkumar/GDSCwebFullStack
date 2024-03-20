import React from 'react'

export const Card = ({ image }) => {
    const Card =({image,title,price,rating}) => {
  return (
    <div className='border border-black/80 p-5'>
    <div className='h-60 w-40'>
        <img src={image} className='h-full w-full' alt="" />
    </div>
    <dir className="my-5 text-3xl space-y-2">
    <p>{title} </p>
    <p>{price}</p>
    <p>{rating}</p>
    </dir>
    </div>
  )
    }
}
