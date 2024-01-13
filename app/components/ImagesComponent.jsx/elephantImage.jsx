import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image'

const ElephantImage = () => {
  return (
    
      <ImageComponent src="/elephant.jpeg" alt="elephant" priority={true} />
    
  )
};

export default ElephantImage;
