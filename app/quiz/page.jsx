'use client';
import React from 'react';
import SoundButton from '../components/soundButton';
import ImageComponent from '../components/ImageComponent';
import Image from 'next/image';
import ElephantImage from '../components/ImagesComponent.jsx/elephantImage';
import EagleImage from '../components/ImagesComponent.jsx/eagleImage';
import LionsImage from '../components/ImagesComponent.jsx/lionsImage';
import RabbitImage from '../components/ImagesComponent.jsx/rabbitImage';
import BearImage from '../components/ImagesComponent.jsx/BearImage';
import GirrafeImage from '../components/ImagesComponent.jsx/girrafeImage';
import ElephantSound from '../components/SoundsComponent/elephantSound';
import DogSound from '../components/SoundsComponent/dogSound';
import { quiz } from './data';
import { useState } from 'react';

  const page =() => {
  const [checkedSoundButton, setCheckedSoundButton]=useState(false);
  const [activeQuestion,setActiveQuestion]=useState(0);
  const [selectedAnswer,setSelectedAnswer]=useState('');
  const [checked, setChecked]= useState(false);
  const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(false);
  const [showResult, setShowResult]=useState(false);
  const [result, setResult]= useState({
    score:0,
    correctAnswers:0,
    wrongAnswers: 0,
  });

  const {questions} = quiz;
  const {question, answers, correctAnswer }= questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (answer ,id) => {
    setChecked(true);
    setSelectedAnswerIndex(true);
    if ((answer.id) === (correctAnswer.id)) {
      setSelectedAnswer(true);
      
      } else{
      setSelectedAnswer(false);
      console.log('false');
      }
  };
  // Calculate score and increment to next question 

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setSelectedAnswerIndex(false);
    setResult((prev) => 
    selectedAnswer 
      ? {
         ...prev,
        correctAnswers: prev.correctAnswers +1,
        }
      : {
         ...prev,
         wrongAnswers: prev.wrongAnswers +1,

        }
    );
    if (activeQuestion !== questions.length -1) {
      setActiveQuestion((prev) => prev +1);
    } else{
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

      
  

  //Function to create correct and wrong sounds
  
  const playCorrectSound = () => {
    const soundCorrect = new Audio('/correct_sound_effect.mp3');
    soundCorrect.play();
  
  };

  const playWrongSound = () => {
    const soundWrong = new Audio('/wrong_sound_effect.mp3');
    soundWrong.play();
    
  };

  //correct and wrong symbols
  const renderAnswerSymbol = () => {
    if (checked) {
      if (selectedAnswer) {
        playCorrectSound();
        return (
          <span className="text-4xl block mx-auto">
            ✅
          </span>
          );
      console.log('selectedAnswer:', selectedAnswer);
      console.log('selectedAnswerIndex:', selectedAnswerIndex);
      console.log(checked);
      console.log(id);
      console.log(answer.id);
      console.log(correctAnswer.id);
      } else {
        playWrongSound();
        return (
          <span className="text-4xl block mx-auto">
            ❌
          </span>
        );
      }
    }
    return null;
  };




  return (
    
      
      <div className=" p-0 border-0 rounded ">{!showResult ? (
       <div >
        <h3>{questions[activeQuestion].question}</h3>
        <ul className="grid grid-cols-2 grid-rows-50 grid-rows-50 place-items-center box-border gap-3">
         {answers.map((answer, id)=>(
          <li
           key={id}
           onClick={() => onAnswerSelected(answer, id)}
           className= {selectedAnswerIndex === false ? "hover:scale-105": "opacity-50 pointer-events-none"}
           >
            <span>{answer.value}</span>
          </li> 
          ))}
        </ul>  
        {renderAnswerSymbol()}
        {checked ? (<div className="flex items-center justify-center h-24"> 
          <button onClick={nextQuestion} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded"> 
           {activeQuestion === questions.length -1 ? 'Finish': 'Next'}
          </button>
         </div>
        
        ):(
         <div className="flex items-center justify-center h-24"> 
          <button className="bg-grey-500 hover:bg-white-700 text-white font-bold py-4 px-10 rounded"
          disabled
          > 
           {activeQuestion === questions.length -1 ? 'Finish': 'Next'}
          </button>
         </div> )} 

        
       </div>
        ) : (
              <div className='flex center justify-center items-center h-screen'>
                <p> 
                  <span className="text-9xl inline-block ">
                   ✅
                  </span>    
                  <span className='text-9xl ml-24'>
                   {result.correctAnswers} 
                  </span>
                 </p> 
              </div>
            )}
      </div> 


    
    
  )


}; 

 

  
  

   export default page;




