import AppleImage from "../components/ImagesComponent.jsx/appleImage";
import BananaImage from "../components/ImagesComponent.jsx/bananaImage";
import LemonImage from "../components/ImagesComponent.jsx/lemonImage";
import MangoImage from "../components/ImagesComponent.jsx/mangoImage";
import OrangesImage from "../components/ImagesComponent.jsx/orangesImage";
import StrawberryImage from "../components/ImagesComponent.jsx/strawberryImage";
import TomatoImage from "../components/ImagesComponent.jsx/tomatoImage";
import MangoSound from "../components/SoundsComponent/mangoSound";
import StrawberrySound from "../components/SoundsComponent/strawberrySound";
import TomatSound from "../components/SoundsComponent/tomatSound";
import OrangesSound from "../components/SoundsComponent/orangesSound";
import CucumberSound from "../components/SoundsComponent/cucumberSound";
import LemonSound from "../components/SoundsComponent/lemonSound";
import BananaSound from "../components/SoundsComponent/bananaSound";
import AppleSound from "../components/SoundsComponent/appleSound";
import CucumberImage from "../components/ImagesComponent.jsx/cucumberImage";
import AvocadoImage from "../components/ImagesComponent.jsx/avocadoImage";
import CarrotImage from "../components/ImagesComponent.jsx/carrotImage";
import CauliflowerImage from "../components/ImagesComponent.jsx/cauliflower";
import CauliflowerSound from "../components/SoundsComponent/cauliflowerSound";




export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<MangoSound />),
        answers: [
          { id: 1, value: (<AppleImage />) },
          { id: 2, value: (<BananaImage />) },
          { id: 3, value: (<LemonImage />) },
          { id: 4, value: (<MangoImage />) },
        ],
        correctAnswer: { id: 4, value: (<MangoImage />) },
      },
      {
        id: 2,
        question: (<StrawberrySound />),
        answers: [
          { id: 1, value: (<AppleImage />) },
          { id: 2, value: (<BananaImage />) },
          { id: 3, value: (<TomatoImage />) },
          { id: 4, value: (<StrawberryImage />) },
        ],
        correctAnswer: { id: 4, value: (<StrawberryImage />) },
      },
      {
        id: 3,
        question: (<TomatSound />),
        answers: [
          { id: 1, value: (<OrangesImage />) },
          { id: 2, value: (<LemonImage />) },
          { id: 3, value: (<TomatoImage />) },
          { id: 4, value: (<StrawberryImage />) },
        ],
        correctAnswer: { id: 3, value: (<TomatoImage />) },
      },
      {
        id: 4,
        question: (<OrangesSound />),
        answers: [
          { id: 1, value: (<AppleImage />) },
          { id: 2, value: (<MangoImage />) },
          { id: 3, value: (<TomatoImage />) },
          { id: 4, value: (<OrangesImage />) },
        ],
        correctAnswer: { id: 4, value: (<OrangesImage />) },
      },
      {
        id: 5,
        question: (<LemonSound />),
        answers: [
          { id: 1, value: (<LemonImage />) },
          { id: 2, value: (<BananaImage />) },
          { id: 3, value: (<MangoImage />) },
          { id: 4, value: (<OrangesImage />) },
        ],
        correctAnswer: { id: 1, value: (<LemonImage />) },
      },
      {
        id: 6,
        question: (<AppleSound />),
        answers: [
          { id: 1, value: (<AppleImage />) },
          { id: 2, value: (<CauliflowerImage />) },
          { id: 3, value: (<TomatoImage />) },
          { id: 4, value: (<StrawberryImage />) },
        ],
        correctAnswer: { id: 1, value: (<AppleImage />) },
      },
      {
        id: 7,
        question: (<BananaSound />),
        answers: [
          { id: 1, value: (<AppleImage />) },
          { id: 2, value: (<BananaImage />) },
          { id: 3, value: (<TomatoImage />) },
          { id: 4, value: (<StrawberryImage />) },
        ],
        correctAnswer: { id: 2, value: (<BananaImage />) },
      },
      {
        id: 9,
        question: (<CauliflowerSound />),
        answers: [
          { id: 1, value: (<OrangesImage />) },
          { id: 2, value: (<CauliflowerImage />) },
          { id: 3, value: (<BananaImage />) },
          { id: 4, value: (<StrawberryImage />) },
        ],
        correctAnswer: { id: 2, value: (<CauliflowerImage />) },
      },
      
    ],
};