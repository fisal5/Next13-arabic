import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const RabbitImage = () => {
  return (
    <div>
      <ImageComponent src="/rabbit.jpeg" alt="rabbit" />
    </div>
  )
}

export default RabbitImage;