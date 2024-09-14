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

  return (
  <img
   ref={drag}
   src={url}
   id={id}
   width="100px" 
   style={{ border: isDragging ? "5px solid blue" : "0px",
   height: inBoard ? "70px" : "100px"  // Reduced height if inBoard is true
   }}
   />

  );
}

export default Picture;
