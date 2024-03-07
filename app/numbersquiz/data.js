 import OneSound from "../components/SoundsComponent/oneSound";
 import TwoSound from "../components/SoundsComponent/twoSound";
 import ThreeSound from "../components/SoundsComponent/threeSound";
 import FourSound from "../components/SoundsComponent/fourSound";
 import FiveSound from "../components/SoundsComponent/fiveSound";
 import SixSound from "../components/SoundsComponent/sixSound";
 import SevenSound from "../components/SoundsComponent/sevenSound";
 import EightSound from "../components/SoundsComponent/eightSound";
 import NineSound from "../components/SoundsComponent/nineSound";
 import TenSound from "../components/SoundsComponent/tenSound";
 import OneImage from "../components/ImagesComponent.jsx/oneImage";
 import TwoImage from "../components/ImagesComponent.jsx/twoImage";
 import ThreeImage from "../components/ImagesComponent.jsx/threeImage";
 import FourImage from "../components/ImagesComponent.jsx/fourImage"
 import FiveImage from "../components/ImagesComponent.jsx/fiveImage";
 import SixImage from "../components/ImagesComponent.jsx/sixImage";
 import SevenImage from "../components/ImagesComponent.jsx/sevenImage";
 import EightImage from "../components/ImagesComponent.jsx/eightImage";
 import NineImage from "../components/ImagesComponent.jsx/nineImage";
 import TenImage from "../components/ImagesComponent.jsx/tenImage";






 export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<OneSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<TwoImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<FiveImage />) },
        ],
        correctAnswer: { id: 1, value: (<OneImage />) },
      },
      {
        id: 2,
        question: (<TwoSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<TwoImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<FiveImage />) },
        ],
        correctAnswer: { id: 2, value: (<TwoImage />) },
      },
      {
        id: 3,
        question: (<ThreeSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<TwoImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<FiveImage />) },
        ],
        correctAnswer: { id: 3, value: (<ThreeImage />) },
      },
      {
        id: 4,
        question: (<FourSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<TwoImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<FourImage />) },
        ],
        correctAnswer: { id: 4, value: (<FourImage />) },
      },
      {
        id: 5,
        question: (<FiveSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<TwoImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<FiveImage />) },
        ],
        correctAnswer: { id: 4, value: (<FiveImage />) },
      },
      {
        id: 6,
        question: (<SixSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<SevenImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<SixImage />) },
        ],
        correctAnswer: { id: 4, value: (<SixImage />) },
      },
      {
        id: 7,
        question: (<SevenSound />),
        answers: [
          { id: 1, value: (<TwoImage />) },
          { id: 2, value: (<NineImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<SevenImage />) },
        ],
        correctAnswer: { id: 4, value: (<SevenImage />) },
      },
      {
        id: 8,
        question: (<EightSound />),
        answers: [
          { id: 1, value: (<ThreeImage />) },
          { id: 2, value: (<SevenImage />) },
          { id: 3, value: (<SixImage />) },
          { id: 4, value: (<EightImage />) },
        ],
        correctAnswer: { id: 4, value: (<EightImage />) },
      },
      {
        id: 9,
        question: (<NineSound />),
        answers: [
          { id: 1, value: (<FourImage />) },
          { id: 2, value: (<FiveImage />) },
          { id: 3, value: (<ThreeImage />) },
          { id: 4, value: (<NineImage />) },
        ],
        correctAnswer: { id: 4, value: (<NineImage />) },
      },
      {
        id: 10,
        question: (<TenSound />),
        answers: [
          { id: 1, value: (<OneImage />) },
          { id: 2, value: (<SixImage />) },
          { id: 3, value: (<TwoImage />) },
          { id: 4, value: (<TenImage />) },
        ],
        correctAnswer: { id: 4, value: (<TenImage />) },
      },

      ],
};