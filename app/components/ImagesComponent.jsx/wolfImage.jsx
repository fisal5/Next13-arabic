import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const WolfImage = () => {
  return (
    <div>
      <ImageComponent src="/Wolf.jpeg" alt="Wolf" />
    </div>
  )
}

export default WolfImage;