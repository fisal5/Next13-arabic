import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const YellowImage = () => {
  return (
    <div>
      <ImageComponent src="/Yellow.webp" alt="Yellow" />
    </div>
  )
}

export default YellowImage;