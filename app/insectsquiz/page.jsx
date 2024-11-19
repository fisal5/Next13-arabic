'use client';
import React from 'react';
import Image from 'next/image';
import { quiz } from './data';
import { useEffect ,useState } from 'react';
import shuffle from '../components/shuffle';
import dynamic from "next/dynamic";
import HomeButton from "../components/homeButton";
import RestartButton from "../components/restartButton"



  const page =() => {
  const [checkedSoundButton, setCheckedSoundButton]=useState(false);
  const [activeQuestion,setActiveQuestion]=useState(0);
  const [selectedAnswer,setSelectedAnswer]=useState('');
  const [checked, setChecked]= useState(false);
  const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(false);
  const [showResult, setShowResult]=useState(false);
  const [isClient, setIsClient] = useState(false);
  const [result, setResult]= useState({
    score:0,
    correctAnswers:0,
    wrongAnswers: 0
  });

/* usestate will run the shuffle function when the state is initialized.
   this will prevent shuffling the questions every time rendering happens */
  const [shuffledQuestions ,setShuffledQuestions] = useState(() => shuffle([...quiz.questions]));
  // For destruction the properties in each element of the shuffledquestions.  
  const {question, answers, correctAnswer } = shuffledQuestions[activeQuestion];
  /* Declares a state variable shuffledAnswers. 
     The state will initially be an empty array.
     setShuffledAnswers is the function that will be used to update the shuffledAnswers state. */
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  /* useEffect shuffles the answers when the activeQuestion state is updated. 
     If we dont use the Useffect. the answers will shuffle every
     time we renders. or will shuffle only just with first render */
     
   useEffect(()=> { const shuffled = shuffle([...answers]);
                    setShuffledAnswers(shuffled); },[activeQuestion]);
  

  
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
    if (activeQuestion != '4') {
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
        {/* <h3>{questions[activeQuestion].question}</h3> */}
        <div className="flex flex-nowrap justify-center sm:justify-end sm:gap-2 md:gap-20 lg:gap-60 xl:gap-96">
          <div className="pt-6">
            <RestartButton />
          </div>
         <h3 className="pl-16 sm:px-20 md:px-28 lg:px-20">{question}</h3>
         <div className="pt-6 pl-12 sm:pr-8">
          <HomeButton  />
         </div>
        </div>
        <ul className="grid grid-cols-2 grid-rows-50 grid-rows-50 place-items-center box-border gap-3">
         {shuffledAnswers.map((answer, id)=>(
          <li
           key={answer.id}
           onClick={() => onAnswerSelected(answer, id)}
           className={`${
            checked && answer.id === correctAnswer.id
              ? 'border-4 border-solid border-green-500' // Green border for the correct answer
              : selectedAnswerIndex === false
              ? 'hover:scale-105'
              : 'opacity-50 pointer-events-none'
          }`}
           >
            <div>{answer.value}</div>
          </li> 
          ))}
        </ul>  
        {renderAnswerSymbol()}
        {checked ? (<div className="flex items-center justify-center h-24"> 
          <button onClick={nextQuestion} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded"> 
           {activeQuestion == '4' ? 'Finish': 'Next'}
          </button>
         </div>
        
        ):(
         <div className="flex items-center justify-center h-24"> 
          <button className="bg-grey-500 hover:bg-white-700 text-white font-bold py-4 px-10 rounded"
          disabled
          > 
           {activeQuestion == '4' ? 'Finish': 'Next'}
          </button>
         </div> )} 

        
       </div>
        ) : (
          <div className='flex flex-wrap center justify-center items-center h-screen'>
            <p> 
              <span className="text-9xl inline-block ">
               ✅
              </span>    
              <span className='text-9xl ml-24'>
               {result.correctAnswers} 
              </span>
             </p> 
              <div className= 'basis-full h-0'> </div>
              <div className="flex flex-wrap justify-center gap-24">
               <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded"
                onClick={() => window.location.reload()}>
                  Restart
               </button>
               <div className="px-8">
                   <HomeButton  />
                </div>
             </div>
          </div> 

        )}
  </div> 




)


}; 

              
               

 

  
  

   export default dynamic (() => Promise.resolve(page), {ssr: false})


