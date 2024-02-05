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

    ],
};