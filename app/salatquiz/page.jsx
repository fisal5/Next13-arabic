'use client';
import { DndContext } from "@dnd-kit/core";
import DraggableItem from "../components/DraggableItem.jsx";
import DropTargetBox from "../components/DropTargetBox.jsx";
import React, {useState} from "react";





export default function page() {
    const [isDropped, setIsDropped] = useState(false);
    const draggableImage = (<DraggableItem id='draggable' image="/airplane.webp" />);
    
    /* const handleDropItem = (itemId, targetId) => {
        setDropMapping((prev) => ({
          ...prev,
          [targetId]: images.find(image => image.id === itemId),
        }));
      };*/


    
      return (
        <div>
            <h1>My Tasks</h1>
            <DndContext  onDragEnd={handleDragEnd} >
                {/*<DraggableItem  image="/airplane.webp" /> */}
                {!isDropped ? draggableImage : null}
                
                <DropTargetBox id='droppable'>
                   {isDropped ? draggableImage : 'Drop here'}
                </DropTargetBox>   
            </DndContext>
        </div>
    );

    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
          setIsDropped(true);
          console.log(isDropped);
          console.log(event.over.id);
          console.log(event.over);
      }
      console.log(event.over.id)
      console.log(event.over)
    }
}