import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const LionsImage = () => {
  return (
    <div>
      <ImageComponent src="/Lions.jpeg" alt="lions" />
    </div>
  )
}

export default LionsImage;