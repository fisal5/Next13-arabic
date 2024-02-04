import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const GiraffeImage = () => {
  return (
    <div>
      <ImageComponent src="/giraffe.jpg" alt="Giraffe"  />
    </div>
  )
}

export default GiraffeImage;