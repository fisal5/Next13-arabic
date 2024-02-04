import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const BlueImage = () => {
  return (
    <div>
      <ImageComponent src="/blue.jpeg" alt="blue" />
    </div>
  )
}

export default BlueImage;