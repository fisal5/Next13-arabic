import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const GreenImage = () => {
  return (
    <div>
      <ImageComponent src="/green.jpeg" alt="Green"  />
    </div>
  )
}

export default GreenImage;