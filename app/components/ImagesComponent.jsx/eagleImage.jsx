import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const EagleImage = () => {
  return (
    <div>
      <ImageComponent src="/eagle.jpeg" alt="eagle" />
    </div>
  )
}

export default EagleImage;
