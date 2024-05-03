import React from 'react'
import SoundButton from '../soundButton';

const laughSound = () => {
  return (
    <div>
      <SoundButton audioSrc="/laugh.mp3" />
    </div>
  )
};

export default laughSound;