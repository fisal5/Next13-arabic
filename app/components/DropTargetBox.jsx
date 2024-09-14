// components/DropTargetBox.js
import { useDroppable } from '@dnd-kit/core';
import { useState } from 'react';

export default function DropTargetBox(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id});
  const [droppedItem, setDroppedItem] = useState(null);

 /* const handleDrop = (event) => {
    const data = event.dataTransfer.getData('application/json');
    const item = JSON.parse(data);
    setDroppedItem(item);
    onDropItem(item.id, id);
  };*/ 

  const style = {
    height: '200px',
    width: '200px',
    margin: '10px',
    border: '2px dashed gray',
    color: 'skyBlue',
    //backgroundColor: isOver ? 'lightgreen' : 'white',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      
      //onDrop={handleDrop}
      //onDragOver={(event) => event.preventDefault()} // To allow drop
    >
     {/* {droppedItem && (
        <img
          src={droppedItem.image}
          alt={`Dropped item ${droppedItem.id}`}
          style={{ width: '100%', height: '100%' }}
        />
     )} */}
    </div>
  );
}
