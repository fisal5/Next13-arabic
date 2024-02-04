import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const ChickenImage = () => {
  return (
    <div>
      <ImageComponent src="/Chicken.jpeg" alt="Chicken" />
    </div>
  )
}

export default ChickenImage;