import React from 'react'
import { useDrag } from 'react-dnd';

function Picture({ id, url, inBoard }) {
    const [{ isDragging }, drag ] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),

    }),
}));
  /*  const handleTouchStart = (event) => {
    event.preventDefault(); // Prevent default touch context menu
    }; */

  return (
  <img
   ref={drag}
   src={url}
   id={id}
   width="100px" 
   style={{ border: isDragging ? "5px solid blue" : "0px",
   height: inBoard ? "70px" : "100px"  // Reduced height if inBoard is true
   }}
   //onTouchStart={handleTouchStart} // Add touch event handler
   />

  );
}

export default Picture;
