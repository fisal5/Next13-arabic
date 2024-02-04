import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const FoxImage = () => {
  return (
    <div>
      <ImageComponent src="/fox.jpeg" alt="Fox" />
    </div>
  )
}

export default FoxImage;