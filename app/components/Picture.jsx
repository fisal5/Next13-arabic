import { NodeNextRequest } from 'next/dist/server/base-http/node';
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
   /* const handleTouchStart = (event) => {
    event.preventDefault(); // Prevent default touch context menu
    }; */

  return (
  <img
   ref={drag}
   src={url}
   id={id}
   width="100px" 
   style={{ border: isDragging ? "5px solid blue" : "0px",
   height: inBoard ? "70px" : "100px", // Reduced height if inBoard is true
   }}
   className= "img"
   //onTouchStart={handleTouchStart} // Add touch event handler
   />

  );
}

export default Picture; 

/*import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

function Picture({ id, url, inBoard }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    // References to store touch positions
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    // Handle touch start to prevent the context menu and store the start position
    const handleTouchStart = (event) => {
        event.preventDefault(); // Prevent the context menu
        const touch = event.touches[0];
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    // Handle touch move to simulate dragging
    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        const deltaX = touch.clientX - touchStartX.current;
        const deltaY = touch.clientY - touchStartY.current;

        // Add custom logic for dragging (e.g., updating position)
        console.log(`Dragging: deltaX = ${deltaX}, deltaY = ${deltaY}`);
    };

    // Handle touch end to drop the item
    const handleTouchEnd = () => {
        // Add custom logic for drop
        console.log('Touch end: drop the item');
    }; */

  {/*  return (
        <img
            ref={drag}
            src={url}
            id={id}
            width="100px"
            style={{
                border: isDragging ? "5px solid blue" : "0px",
                height: inBoard ? "70px" : "100px"
            }}
            onTouchStart={handleTouchStart} // Add touch start handler
            onTouchMove={handleTouchMove}   // Add touch move handler
            onTouchEnd={handleTouchEnd}     // Add touch end handler
        />
    );
}

export default Picture; */}


