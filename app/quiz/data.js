import BearImage from "../components/ImagesComponent.jsx/BearImage";
import EagleImage from "../components/ImagesComponent.jsx/eagleImage";
import ElephantImage from "../components/ImagesComponent.jsx/elephantImage";
import GirrafeImage from "../components/ImagesComponent.jsx/girrafeImage";
import LionsImage from "../components/ImagesComponent.jsx/lionsImage";
import RabbitImage from "../components/ImagesComponent.jsx/rabbitImage";
import ElephantSound from "../components/SoundsComponent/elephantSound";
import GiraffeSound from "../components/SoundsComponent/giraffeSound";

/* export const quiz = {
     totalQuestions:2,
    questions:[
        {
            id:1,
            question:(<ElephantSound />),
            answers:[<ElephantImage />,<EagleImage />,<LionsImage />,<RabbitImage />],
            correctAnswer:"Elephant",
            
        },
        {
            id:2,
            question:(<GiraffeSound />),
            answers:[(<GirrafeImage />),(<BearImage />),(<RabbitImage />),(<EagleImage />)],
            correctAnswer:(<GirrafeImage />),
        },
    ],
};*/
export const quiz = {
  totalQuestions: 2,
  questions: [
    {
      id: 1,
      question: (<ElephantSound />),
      answers: [
        { id: 1, value: (<ElephantImage />) },
        { id: 2, value: (<EagleImage />) },
        { id: 3, value: (<LionsImage />) },
        { id: 4, value: (<RabbitImage />) },
      ],
      correctAnswer: { id: 1, value: (<ElephantImage />) },
    },
    {
      id: 2,
      question: (<GiraffeSound />),
      answers: [
        { id: 1, value: (<GirrafeImage />) },
        { id: 2, value: (<BearImage />) },
        { id: 3, value: (<RabbitImage />) },
        { id: 4, value: (<EagleImage />) },
      ],
      correctAnswer: { id: 1, value: (<GirrafeImage />) },
    },
  ],
};
