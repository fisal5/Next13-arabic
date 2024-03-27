// components/AudioPlayer.js
"use client"
import React from 'react';

const SoundButton = ({ audioSrc }) => {
  // Function to play the audio when the button is clicked
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="flex items-center justify-center h-24">
      <button 
       className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-5 sm:py-4 sm:px-10 rounded"
      onClick={playAudio}>Play Sound</button>
    </div>
  );
};

export default SoundButton;
