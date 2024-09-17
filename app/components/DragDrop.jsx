'use client';
import React, { useRef, useState,useEffect } from 'react';
import Picture from './Picture';
import "../examplequiz/App.css";
import { useDrop } from "react-dnd";
import shuffle from './shuffle';
import RestartButton from './restartButton';
import HomeButton from "./homeButton";



const PictureList = [
    { id: 1, url: "/takbeer.webp" },
    { id: 2, url: "/fateha.webp" },
    { id: 3, url: "/alrko3.webp" },
    { id: 4, url: "/sgood.webp"},
    { id: 5, url: "/tashahuud.webp"},
    { id: 6, url: "/tasleem.webp"},
];

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].id !== arr2[i].id || arr1[i].url !== arr2[i].url) {
          return false;
      }
  }
  return true;
}



function DragDrop() {
  const [board, setBoard] = useState([]);
  const [shuffledPictureList, setShuffledPictureList] = useState([]);
  const [checkedAnswer, setCheckedAnswer] = useState(false);

  useEffect(() => {
    setShuffledPictureList(shuffle([...PictureList]));
  }, []);
  

  // to make a drop target its part of react Dnd library.
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    setBoard((board) => {
      const pictureList = PictureList.find((picture) => id === picture.id);
      
      console.log('PictureList:', pictureList);  // Log the found picture
  
      if (!pictureList) {
        console.error(`No picture found with id: ${id}`);
        return board; // Return the existing board if no picture is found
      }
      
      // If pictureList is defined and not already in the board
      if (!board.some(picture => picture.id === id)) {
        return [...board, pictureList];
      }
      
      return board; // Return unchanged board if picture is already present
    });
  };
  

  /* const addImageToBoard = (id) => {
    // Check if the image is already in the board
    setBoard((board) => {
      if (!board.some(pictur => pictur.id === id)) {
        const pictureList = PictureList.find((picture) => id === picture.id);
        console.log('PictureList:', pictureList); 
        return [...board, pictureList];
      }
      return board;
    });
  };*/

 /* const dragPerson = useRef(0);
  const draggedOverPerson = useRef(0);
// This make elemnets sortable in the list.
  function handleSort() {
    const peopleClone = [...board];
    const temp = peopleClone[dragPerson.current];
    peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
    peopleClone[draggedOverPerson.current] = temp;
    setBoard(peopleClone);
  }*/
  const dragPerson = useRef(0);
  const draggedOverPerson = useRef(0);
// This make elemnets sortable in the list.
  const handleSort = () => {
    if (
      dragPerson.current >= 0 && 
      draggedOverPerson.current >= 0 && 
      dragPerson.current < board.length && 
      draggedOverPerson.current < board.length
    ) {
      const peopleClone = [...board];
      const temp = peopleClone[dragPerson.current];
      peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
      peopleClone[draggedOverPerson.current] = temp;
      setBoard(peopleClone);
      
      //console.log('DragPerson Index:', dragPerson.current);
      //console.log('DraggedOverPerson Index:', draggedOverPerson.current);
   } /* else {
      //console.error('Invalid drag indices:', dragPerson.current, draggedOverPerson.current);
    } */
  };
  

  //console.log(board);
  const correctBoard = [
    { id: 1, url: "/takbeer.webp" },
    { id: 2, url: "/fateha.webp" },
    { id: 3, url: "/alrko3.webp" },
    { id: 4, url: "/sgood.webp"},
    { id: 5, url: "/tashahuud.webp"},
    { id: 6, url: "/tasleem.webp"},
];

useEffect(() => {
  if (arraysAreEqual(board, correctBoard)) {
      console.log("The board is correct!");
  } else {
      console.log("The board is incorrect.");
  }
}, [board]);

//Function to create correct and wrong sounds
  
const playCorrectSound = () => {
  const soundCorrect = new Audio('/correct_sound_effect.mp3');
  soundCorrect.play();

};

const playWrongSound = () => {
  const soundWrong = new Audio('/wrong_sound_effect.mp3');
  soundWrong.play();
  
};

const checkAnswer = () => {
  setCheckedAnswer(true);
}
 //correct and wrong symbols
 const renderAnswerSymbol = () => {
  if (checkedAnswer) {
    if (arraysAreEqual(board, correctBoard)) {
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
  
  /* const secondItem = board[2];
  if (board === correctBoard) {
   
    console.log("it working");
  } else {
    //console.log(correctBoard);
    console.log(board);
  } */
//console.log('PictureList:', pictureList);
//console.log('DragPerson Index:', dragPerson.current);
//console.log('DraggedOverPerson Index:', draggedOverPerson.current);


  return (
    <div>
      <div className="Pictures">
        {shuffledPictureList.map((picture) => (
          <Picture url={picture.url} id={picture.id} key={picture.id}/>
        ))}
      </div>
    <div className="flex flex-wrap justify-center">
      <ul>
       <li>
        <div className="flex items-center justify-center h-24 pt-6 pr-64">
         <button onClick={checkAnswer} 
          className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-5 sm:py-4 sm:px-10 rounded"
           >Check</button>
        </div>
        </li>
        <li>
        {/* <div className="flex flex-nowrap justify-center sm:justify-end sm:gap-2 md:gap-20 lg:gap-60 xl:gap-96"> */}
         <div className="pt-6">
            <RestartButton />
          </div>
        </li>
        <li>
        <div className="pt-6 pl-12 sm:pr-8">
          <HomeButton  />
         </div>
        </li>
        
        
       
       <li> 
         <div className="pr-64 pt-6">{renderAnswerSymbol()}</div> 
       </li>
      </ul>

      <div className="Board" >
       
          <div className="board" ref={drop}>
            {board.map((picture, index) => (
              <div
                key={picture.id}
                onDragStart={() => (dragPerson.current = index)}
                onDragEnter={() => (draggedOverPerson.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <Picture  url={picture.url} id={picture.id} inBoard={true}/>
              </div>
            ))}
          </div>
        
      </div>
    </div>  
    </div>
  );
}

export default DragDrop;
