import RedImage from "../components/ImagesComponent.jsx/RedImage";
import GreenImage from "../components/ImagesComponent.jsx/greenImage";
import BlueImage from "../components/ImagesComponent.jsx/BlueImage";
import PurpleImage from "../components/ImagesComponent.jsx/PurpleImage";
import YellowImage from "../components/ImagesComponent.jsx/YellowImage";
import RedSound from "../components/SoundsComponent/redSound";
import BlueSound from "../components/SoundsComponent/blueSound";
import YellowSound from "../components/SoundsComponent/yellowSound";
import PurpleSound from "../components/SoundsComponent/purpleSound";
import GreenSound from "../components/SoundsComponent/greenSound";
import BlackImage from "../components/ImagesComponent.jsx/blackImage";
import BlackSound from "../components/SoundsComponent/blackSound";
import GreySound from "../components/SoundsComponent/greySound";
import WhiteSound from "../components/SoundsComponent/whiteSound";
import BrownSound from "../components/SoundsComponent/brownSound";
import GreyImage from "../components/ImagesComponent.jsx/greyImage";
import WhiteImage from "../components/ImagesComponent.jsx/whiteImage";
import BrownImage from "../components/ImagesComponent.jsx/brownImage";
import PinkSound from "../components/SoundsComponent/pinkSound";
import PinkImage from "../components/ImagesComponent.jsx/pinkImage";
import OrangeSound from "../components/SoundsComponent/orangeSound";
import OrangeImage from "../components/ImagesComponent.jsx/orangeImage";





export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<BlueSound />),
        answers: [
          { id: 1, value: (<RedImage />) },
          { id: 2, value: (<BlueImage />) },
          { id: 3, value: (<PurpleImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 2, value: (<BlueImage />) },
      },
      {
        id: 2,
        question: (<RedSound />),
        answers: [
          { id: 1, value: (<GreenImage />) },
          { id: 2, value: (<BlueImage />) },
          { id: 3, value: (<PurpleImage />) },
          { id: 4, value: (<RedImage />) },
        ],
        correctAnswer: { id: 4, value: (<RedImage />) },
      },
      {
        id: 3,
        question: (<YellowSound />),
        answers: [
          { id: 1, value: (<GreenImage />) },
          { id: 2, value: (<BlueImage />) },
          { id: 3, value: (<YellowImage />) },
          { id: 4, value: (<RedImage />) },
        ],
        correctAnswer: { id: 3, value: (<YellowImage />) },
      },
      {
        id: 4,
        question: (<PurpleSound />),
        answers: [
          { id: 1, value: (<RedImage />) },
          { id: 2, value: (<BlueImage />) },
          { id: 3, value: (<PurpleImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 3, value: (<PurpleImage />) },
      },
      {
        id: 5,
        question: (<GreenSound />),
        answers: [
          { id: 1, value: (<GreenImage />) },
          { id: 2, value: (<BlueImage />) },
          { id: 3, value: (<PurpleImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 1, value: (<GreenImage />) },
      },
      {
        id: 6,
        question: (<BlackSound />),
        answers: [
          { id: 1, value: (<BlackImage />) },
          { id: 2, value: (<GreenImage />) },
          { id: 3, value: (<RedImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 1, value: (<BlackImage />) },
      },
      {
        id: 7,
        question: (<WhiteSound />),
        answers: [
          { id: 1, value: (<WhiteImage />) },
          { id: 2, value: (<BrownImage />) },
          { id: 3, value: (<RedImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 1, value: (<WhiteImage />) },
      },
      {
        id: 8,
        question: (<BrownSound />),
        answers: [
          { id: 1, value: (<BrownImage />) },
          { id: 2, value: (<RedImage />) },
          { id: 3, value: (<WhiteImage />) },
          { id: 4, value: (<GreyImage />) },
        ],
        correctAnswer: { id: 1, value: (<BrownImage />) },
      },
      {
        id: 9,
        question: (<GreySound />),
        answers: [
          { id: 1, value: (<GreyImage />) },
          { id: 2, value: (<BrownImage />) },
          { id: 3, value: (<WhiteImage />) },
          { id: 4, value: (<BlackImage />) },
        ],
        correctAnswer: { id: 1, value: (<GreyImage />) },
      },
      {
        id: 10,
        question: (<PinkSound />),
        answers: [
          { id: 1, value: (<RedImage />) },
          { id: 2, value: (<PinkImage />) },
          { id: 3, value: (<PurpleImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 2, value: (<PinkImage />) },
      },
      {
        id: 11,
        question: (<OrangeSound />),
        answers: [
          { id: 1, value: (<RedImage />) },
          { id: 2, value: (<OrangeImage />) },
          { id: 3, value: (<PurpleImage />) },
          { id: 4, value: (<YellowImage />) },
        ],
        correctAnswer: { id: 2, value: (<OrangeImage />) },
      },



    ],
};