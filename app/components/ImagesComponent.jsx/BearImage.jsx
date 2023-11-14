import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const BearImage = () => {
  return (
    <div>
      <ImageComponent src="/Bear.jpeg" alt="Bear" />
    </div>
  )
}

export default BearImage;