import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const TigerImage = () => {
  return (
    <div>
      <ImageComponent src="/tiger.jpeg" alt="TIGER" />
    </div>
  )
}

export default TigerImage;