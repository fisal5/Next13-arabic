import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const DuckImage = () => {
  return (
    <div>
      <ImageComponent src="/Duck.jpeg" alt="Duck" />
    </div>
  )
}

export default DuckImage;