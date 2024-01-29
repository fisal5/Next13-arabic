import BearImage from "../components/ImagesComponent.jsx/BearImage";
import EagleImage from "../components/ImagesComponent.jsx/eagleImage";
import ElephantImage from "../components/ImagesComponent.jsx/elephantImage";
import GirrafeImage from "../components/ImagesComponent.jsx/girrafeImage";
import LionsImage from "../components/ImagesComponent.jsx/lionsImage";
import RabbitImage from "../components/ImagesComponent.jsx/rabbitImage";
import ElephantSound from "../components/SoundsComponent/elephantSound";
import GiraffeSound from "../components/SoundsComponent/giraffeSound";
import BearSound from "../components/SoundsComponent/bearSound";
import DogImage from "../components/ImagesComponent.jsx/DogImage";
import DogSound from "../components/SoundsComponent/dogSound";
import BirdSound from "../components/SoundsComponent/birdSound";
import BirdImage from "../components/ImagesComponent.jsx/BirdImage";
import TigerImage from "../components/ImagesComponent.jsx/TigerImage";
import MonkeyImage from "../components/ImagesComponent.jsx/MonkeyImage";
import CatImage from "../components/ImagesComponent.jsx/CatImage";
import TigerSound from "../components/SoundsComponent/tigerSound";
import CatSound from "../components/SoundsComponent/catSound";
import MonkeySound from "../components/SoundsComponent/monkeySound";
import EagleSound from "../components/SoundsComponent/eagleSound";

export const quiz = {
  totalQuestions: 5,
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
    {
      id: 3,
      question: (<BearSound />),
      answers: [
        { id: 1, value: (<ElephantImage />) },
        { id: 2, value: (<BearImage />) },
        { id: 3, value: (<LionsImage />) },
        { id: 4, value: (<DogImage />) },
      ],
      correctAnswer: { id: 2, value: (<BearImage />) },
    },
    {
      id: 4,
      question: (<DogSound />),
      answers: [
        { id: 1, value: (<GirrafeImage />) },
        { id: 2, value: (<LionsImage />) },
        { id: 3, value: (<DogImage />) },
        { id: 4, value: (<EagleImage />) },
      ],
      correctAnswer: { id: 3, value: (<DogImage />) },
    },
    {
      id: 5,
      question: (<BirdSound />),
      answers: [
        { id: 1, value: (<MonkeyImage />) },
        { id: 2, value: (<BirdImage />) },
        { id: 3, value: (<TigerImage />) },
        { id: 4, value: (<RabbitImage />) },
      ],
      correctAnswer: { id: 2, value: (<BirdImage />) },
    },
    {
      id: 6,
      question: (<TigerSound />),
      answers: [
        { id: 1, value: (<LionsImage />) },
        { id: 2, value: (<BirdImage />) },
        { id: 3, value: (<TigerImage />) },
        { id: 4, value: (<CatImage />) },
      ],
      correctAnswer: { id: 3, value: (<TigerImage />) },
    },
    {
      id: 7,
      question: (<CatSound />),
      answers: [
        { id: 1, value: (<GirrafeImage />) },
        { id: 2, value: (<BearImage />) },
        { id: 3, value: (<RabbitImage />) },
        { id: 4, value: (<CatImage />) },
      ],
      correctAnswer: { id: 4, value: (<CatImage />) },
    },
    {
      id: 8,
      question: (<MonkeySound />),
      answers: [
        { id: 1, value: (<ElephantImage />) },
        { id: 2, value: (<EagleImage />) },
        { id: 3, value: (<MonkeyImage />) },
        { id: 4, value: (<TigerImage />) },
      ],
      correctAnswer: { id: 3, value: (<MonkeyImage />) },
    },
    {
      id: 9,
      question: (<EagleSound />),
      answers: [
        { id: 1, value: (<ElephantImage />) },
        { id: 2, value: (<EagleImage />) },
        { id: 3, value: (<MonkeyImage />) },
        { id: 4, value: (<TigerImage />) },
      ],
      correctAnswer: { id: 2, value: (<EagleImage />) },
    },
    
    
    
  ],
};
