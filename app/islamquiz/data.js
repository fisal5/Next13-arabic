import SgoodImage from "../components/ImagesComponent.jsx/sgoodImage";
import Alrko3Image from "../components/ImagesComponent.jsx/alrko3Image";
import WudhuImage from "../components/ImagesComponent.jsx/wudhuImage";
import HijabImage from "../components/ImagesComponent.jsx/hijabImage";
import ReadingQuranImage from "../components/ImagesComponent.jsx/readingquran";
import MasjedImage from "../components/ImagesComponent.jsx/masjedImage";
import SgoodSound from "../components/SoundsComponent/sgoodSound";
import Rkoo3Sound from "../components/SoundsComponent/rkoo3Sound";
import Wudu2Sound from "../components/SoundsComponent/wudu2Sound";
import HijabSound from "../components/SoundsComponent/hijabSound";
import TakbeerSound from "../components/SoundsComponent/takbeerSound";
import TashahuudSound from "../components/SoundsComponent/tashahuudSound";
import TasleemSound from "../components/SoundsComponent/tasleemSound";
import Do3a2Sound from "../components/SoundsComponent/do3a2Sound";
import MasjedSound from "../components/SoundsComponent/masjedSound";
import Ka3baSound from "../components/SoundsComponent/Ka3baSound";
import FatehaImage from "../components/ImagesComponent.jsx/fatehaImage";
import FatehaSound from "../components/SoundsComponent/airplaneSound";
import Ka3baImage from "../components/ImagesComponent.jsx/ka3baImage";
import Do3a2Image from "../components/ImagesComponent.jsx/do3a2Image";
import TasleemImage from "../components/ImagesComponent.jsx/tasleemImage";
import TashahuudImage from "../components/ImagesComponent.jsx/tashahuudImage";



export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<Do3a2Sound />),
        answers: [
          { id: 1, value: (<Do3a2Image />) },
          { id: 2, value: (<Ka3baImage />) },
          { id: 3, value: (<MasjedImage />) },
          { id: 4, value: (<HijabImage />) },
        ],
        correctAnswer: { id: 1, value: (<Do3a2Image />) },
      },
      {
        id: 2,
        question: (<MasjedSound />),
        answers: [
          { id: 1, value: (<HijabImage />) },
          { id: 2, value: (<MasjedImage />) },
          { id: 3, value: (<Ka3baImage />) },
          { id: 4, value: (<Do3a2Image />) },
        ],
        correctAnswer: { id: 2, value: (<MasjedImage />) },
      },
      {
        id: 3,
        question: (<FatehaSound />),
        answers: [
          { id: 1, value: (<Alrko3Image />) },
          { id: 2, value: (<SgoodImage />) },
          { id: 3, value: (<FatehaImage />) },
          { id: 4, value: (<TasleemImage />) },
        ],
        correctAnswer: { id: 3, value: (<FatehaImage />) },
      },
      {
        id: 4,
        question: (<SgoodSound />),
        answers: [
          { id: 1, value: (<TashahuudImage />) },
          { id: 2, value: (<TasleemImage />) },
          { id: 3, value: (<FatehaImage />) },
          { id: 4, value: (<SgoodImage />) },
        ],
        correctAnswer: { id: 4, value: (<SgoodImage />) },
      },
     {
        id: 5,
        question: (<TasleemSound />),
        answers: [
          { id: 1, value: (<TashahuudImage />) },
          { id: 2, value: (<Alrko3Image />) },
          { id: 3, value: (<FatehaImage />) },
          { id: 4, value: (<TasleemImage />) },
        ],
        correctAnswer: { id: 4, value: (<TasleemImage />) },
      },
      {
        id: 6,
        question: (<Ka3baSound />),
        answers: [
          { id: 1, value: (<ReadingQuranImage />) },
          { id: 2, value: (<HijabImage />) },
          { id: 3, value: (<MasjedImage />) },
          { id: 4, value: (<Ka3baImage />) },
        ],
        correctAnswer: { id: 4, value: (<ka3baImage />) },
      },
      /*{
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
      },*/

      ],
};