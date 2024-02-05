import React from 'react'
import ImageComponent from '../ImageComponent'
import Image from 'next/image' 

const MonkeyImage = () => {
  return (
    <div>
      <ImageComponent src="/monkey.jpeg" alt="Monkey" />
    </div>
  )
}

export default MonkeyImage;