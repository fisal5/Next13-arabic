/*'use client';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/DragDrop";
import { TouchBackend } from 'react-dnd-touch-backend';

function Page() {
  return ( <DndProvider backend={HTML5Backend} backend={TouchBackend} options={{ enableMouseEvents: true }}>
            <div className="App">
              <DragDrop />
            </div>
           </DndProvider> 
         );
}
export default Page; */

'use client';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import DragDrop from "../components/DragDrop";
import { useEffect, useState } from "react";

function Page() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the device supports touch
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDevice);
  }, []);

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend} options={{ enableMouseEvents: true }}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default Page;





  