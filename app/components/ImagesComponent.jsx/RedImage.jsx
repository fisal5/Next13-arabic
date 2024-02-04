import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const RedImage = () => {
  return (
    <div>
      <ImageComponent src="/Red.jpeg" alt="Red" />
    </div>
  )
}

export default RedImage;