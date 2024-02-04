import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const HorseImage = () => {
  return (
    <div>
      <ImageComponent src="/Horse.jpeg" alt="Horse" />
    </div>
  )
}

export default HorseImage;