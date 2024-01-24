import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const BirdImage = () => {
  return (
    <div>
      <ImageComponent src="/Bird.jpeg" alt="Bird" />
    </div>
  )
}

export default BirdImage;