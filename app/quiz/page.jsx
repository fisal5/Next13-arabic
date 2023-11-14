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
import { quiz } from './data';
import { useState } from 'react';

  const page =() => {
  const [activeQuestion,setActiveQuestion]=useState(0);
  const [selectedAnswer,setSelectedAnswer]=useState('');
  const [checked, setChecked]= useState(false);
  const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(null);
  const [showResult, setShowResult]=useState(false);
  const [result, setResult]= useState({
    score:0,
    correctAnswers:0,
    wrongAnswers: 0,
  });

  const {questions} = quiz;
  const {question, answers, corrctAnswer }= questions[activeQuestion];

  return (
    
      
      <div className=" p-4 border border-gray-300 rounded shadow-md ">{!showResult ? (
       <div>
        <h3>{questions[activeQuestion].question}</h3>
        <ul className="grid grid-cols-2 grid-rows-2 place-items-center box-border h-full gap-9">
         {answers.map((answer, idx)=>(
          <li
           key={idx}
           >
           <span>{answer}</span>
          </li> 
          ))};
        </ul>  
        
       </div>
        ) : (
        <div>{Result}</div>)}
      </div> 


    
    
  )


}; 

 /* const page = () => {
  return (
     
    <div className="p-4 border border-gray-300 rounded shadow-md h-screen">
  
    <ElephantSound />
  
    
    <li className="grid grid-cols-2 grid-rows-2 grid-rows-auto box-border h-150 gap-4 ">
      <EagleImage />
      <ElephantImage/>
      <LionsImage />
      <GirrafeImage/>
    </li>
  </div>

  );
}; 
*/

  
  

   export default page;




