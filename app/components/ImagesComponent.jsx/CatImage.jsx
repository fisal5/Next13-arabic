import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const CatImage = () => {
  return (
    <div>
      <ImageComponent src="/Cat.jpeg" alt="Cat" />
    </div>
  )
}

export default CatImage;