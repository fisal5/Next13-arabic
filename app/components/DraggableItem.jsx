import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function DraggableItem({ image, id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id:{id}});

  const style =  transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
    //transition,
    //transform: CSS.Translate.toString(transform), 
    //opacity: isDragging ? 0.5 : 1,
    //cursor: 'grab',
  

  return (
    <img
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      src={image}
      alt={`Draggable item `}
      width={100}
      height={100}
    />
  );
};
