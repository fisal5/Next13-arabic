import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const GirrafeImage = () => {
  return (
    <div>
      <ImageComponent src="/giraffe.jpg" alt="Girrafe"  />
    </div>
  )
}

export default GirrafeImage;