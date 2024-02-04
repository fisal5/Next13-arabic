import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const PurpleImage = () => {
  return (
    <div>
      <ImageComponent src="/Purple.webp" alt="Purple" />
    </div>
  )
}

export default PurpleImage;