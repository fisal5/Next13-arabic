
import React from "react";
import Image from 'next/image';
import selectedAnswerIndex from '../quiz/page';


//Define a rusable image component 

const ImageComponent = ({ src, alt}) => {
    return( 
       <div className="rounded-lg mx-auto overflow-hidden">
         <Image className={`ease-in-out w-64 h-52 ${
           selectedAnswerIndex === 'id' ? "border-2 border-black" : "scale-100 hover:scale-105"
}`}

          src={src} 
          alt={alt}
          width={650} 
          height={650} 
          sizes="(min-width: 1420px) 650px, calc(47.73vw - 18px)" />
       </div>
    );
};

export default ImageComponent;
