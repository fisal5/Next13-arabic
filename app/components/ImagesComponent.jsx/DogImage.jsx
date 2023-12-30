import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const DogImage = () => {
  return (
    <div>
      <ImageComponent src="/Dog.jpeg" alt="Dog" />
    </div>
  )
}

export default DogImage;