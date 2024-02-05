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
import TigerImage from "../components/ImagesComponent.jsx/tigerImage.jsx";
import MonkeyImage from "../components/ImagesComponent/monkeyImage.jsx";
import CatImage from "../components/ImagesComponent.jsx/CatImage";
import TigerSound from "../components/SoundsComponent/tigerSound";
import CatSound from "../components/SoundsComponent/catSound";
import MonkeySound from "../components/SoundsComponent/monkeySound";
import EagleSound from "../components/SoundsComponent/eagleSound";
import ParrotImage from "../components/ImagesComponent.jsx/parrotImage";
import SquirrelImage from "../components/ImagesComponent.jsx/squirrelImage";
import ChickenImage from "../components/ImagesComponent.jsx/chickenImage";
import CrocodileImage from "../components/ImagesComponent.jsx/crocodileImage";
import DeerImage from "../components/ImagesComponent.jsx/deerImage";
import DonkeyImage from "../components/ImagesComponent.jsx/donkeyImage";
import DuckImage from "../components/ImagesComponent.jsx/duckImage";
import FoxImage from "../components/ImagesComponent.jsx/foxImage";
import HorseImage from "../components/ImagesComponent.jsx/horseImage";
import MouseImage from "../components/ImagesComponent.jsx/mouseImage";
import OxImage from "../components/ImagesComponent.jsx/oxImage";
import RoosterImage from "../components/ImagesComponent.jsx/roosterImage";
import WolfImage from "../components/ImagesComponent.jsx/wolfImage";
import WolfSound from "../components/SoundsComponent/wolfSound";
import MouseSound from "../components/SoundsComponent/mouseSound";
import RoosterSound from "../components/SoundsComponent/roosterSound";
import FoxSound from "../components/SoundsComponent/foxSound";
import ParrotSound from "../components/SoundsComponent/parrotSound";
import HorseSound from "../components/SoundsComponent/horseSound";
import SquirrelSound from "../components/SoundsComponent/squirrelSound";
import ChickenSound from "../components/SoundsComponent/chickenSound";
import DonkeySound from "../components/SoundsComponent/donkeySound";
import DeerSound from "../components/SoundsComponent/deerSound";
import CrocodileSound from "../components/SoundsComponent/crocodileSound";
import DuckSound from "../components/SoundsComponent/duckSound";
import OxSound from "../components/SoundsComponent/oxSound";








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
        { id: 4, value: (<SquirrelImage />) },
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
        { id: 4, value: (<ParrotImage />) },
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
    {
      id: 10,
      question: (<WolfSound />),
      answers: [
        { id: 1, value: (<OxImage />) },
        { id: 2, value: (<WolfImage />) },
        { id: 3, value: (<LionsImage />) },
        { id: 4, value: (<SquirrelImage />) },
      ],
      correctAnswer: { id: 2, value: (<WolfImage />) },
    },
    {
      id: 11,
      question: (<MouseSound />),
      answers: [
        { id: 1, value: (<DuckImage />) },
        { id: 2, value: (<HorseImage />) },
        { id: 3, value: (<FoxImage />) },
        { id: 4, value: (<MouseImage />) },
      ],
      correctAnswer: { id: 4, value: (<MouseImage />) },
    },
    {
      id: 12,
      question: (<RoosterSound />),
      answers: [
        { id: 1, value: (<DuckImage />) },
        { id: 2, value: (<CrocodileImage />) },
        { id: 3, value: (<RoosterImage />) },
        { id: 4, value: (<DeerImage />) },
      ],
      correctAnswer: { id: 3, value: (<RoosterImage />) },
    },
    {
      id: 13,
      question: (<ParrotSound />),
      answers: [
        { id: 1, value: (<ParrotImage />) },
        { id: 2, value: (<SquirrelImage />) },
        { id: 3, value: (<WolfImage />) },
        { id: 4, value: (<HorseImage />) },
      ],
      correctAnswer: { id: 1, value: (<ParrotImage />) },
    },
    {
      id: 14,
      question: (<FoxSound />),
      answers: [
        { id: 1, value: (<ParrotImage />) },
        { id: 2, value: (<SquirrelImage />) },
        { id: 3, value: (<WolfImage />) },
        { id: 4, value: (<FoxImage />) },
      ],
      correctAnswer: { id: 4, value: (<FoxImage />) },
    },
    {
      id: 15,
      question: (<HorseSound />),
      answers: [
        { id: 1, value: (<ParrotImage />) },
        { id: 2, value: (<SquirrelImage />) },
        { id: 3, value: (<WolfImage />) },
        { id: 4, value: (<HorseImage />) },
      ],
      correctAnswer: { id: 4, value: (<HorseImage />) },
    },
    {
      id: 16,
      question: (<SquirrelSound />),
      answers: [
        { id: 1, value: (<ParrotImage />) },
        { id: 2, value: (<SquirrelImage />) },
        { id: 3, value: (<DuckImage />) },
        { id: 4, value: (<RoosterImage />) },
      ],
      correctAnswer: { id: 2, value: (<SquirrelImage />) },
    },
    {
      id: 17,
      question: (<ChickenSound />),
      answers: [
        { id: 1, value: (<ChickenImage />) },
        { id: 2, value: (<OxImage />) },
        { id: 3, value: (<EagleImage />) },
        { id: 4, value: (<DonkeyImage />) },
      ],
      correctAnswer: { id: 1, value: (<ChickenImage />) },
    },
    {
      id: 18,
      question: (<DeerSound />),
      answers: [
        { id: 1, value: (<DeerImage />) },
        { id: 2, value: (<SquirrelImage />) },
        { id: 3, value: (<DuckImage />) },
        { id: 4, value: (<RoosterImage />) },
      ],
      correctAnswer: { id: 1 , value: (<DeerImage />) },
    },
    {
      id: 19,
      question: (<DonkeySound />),
      answers: [
        { id: 1, value: (<DonkeyImage />) },
        { id: 2, value: (<HorseImage />) },
        { id: 3, value: (<WolfImage />) },
        { id: 4, value: (<MouseImage />) },
      ],
      correctAnswer: { id: 1, value: (<DonkeyImage />) },
    },
    {
      id: 20,
      question: (<CrocodileSound />),
      answers: [
        { id: 1, value: (<CrocodileImage />) },
        { id: 2, value: (<HorseImage />) },
        { id: 3, value: (<FoxImage />) },
        { id: 4, value: (<OxImage />) },
      ],
      correctAnswer: { id: 4, value: (<CrocodileImage />) },
    },
    {
      id: 21,
      question: (<DuckSound />),
      answers: [
        { id: 1, value: (<DeerImage />) },
        { id: 2, value: (<FoxImage />) },
        { id: 3, value: (<DuckImage />) },
        { id: 4, value: (<RoosterImage />) },
      ],
      correctAnswer: { id: 3 , value: (<DuckImage />) },
    },



    
    
    
    
  ],
};
