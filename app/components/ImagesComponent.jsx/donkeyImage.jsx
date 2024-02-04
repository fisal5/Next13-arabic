import React from 'react'
import ImageComponent from '../ImageComponent'
//import Image from 'next/image' 

const DonkeyImage = () => {
  return (
    <div>
      <ImageComponent src="/donkey.jpeg" alt="Donkey" />
    </div>
  )
}

export default DonkeyImage;