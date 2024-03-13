import AntImage from "../components/ImagesComponent.jsx/antImage";
import BeeImage from "../components/ImagesComponent.jsx/beeImage";
import MosquitoImage from "../components/ImagesComponent.jsx/mosquitoImage";
import FlyinsectImage from "../components/ImagesComponent.jsx/flyinsectImage";
import AntSound from "../components/SoundsComponent/antSound";
import BeeSound from "../components/SoundsComponent/beeSound";
import WormImage from "../components/ImagesComponent.jsx/wormImage";
import SpiderImage from "../components/ImagesComponent.jsx/spiderImage";
import ButterflyImage from "../components/ImagesComponent.jsx/butterflyImage";
import CockroachImage from "../components/ImagesComponent.jsx/cockroachImage";
import GresshopperImage from "../components/ImagesComponent.jsx/gresshopperImage";
import GresshopperSound from "../components/SoundsComponent/gresshopperSound";
import CockroachSound from "../components/SoundsComponent/cockroachSound";
import MosquitoSound from "../components/SoundsComponent/mosquitoSound";
import ButterflySound from "../components/SoundsComponent/butterflySound";
import FlyinsectSound from "../components/SoundsComponent/flyInsectSound";
import WormSound from "../components/SoundsComponent/wormSound";
import SpiderSound from "../components/SoundsComponent/spiderSound";





export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<AntSound />),
        answers: [
          { id: 1, value: (<AntImage />) },
          { id: 2, value: (<BeeImage />) },
          { id: 3, value: (<MosquitoImage />) },
          { id: 4, value: (<FlyinsectImage />) },
        ],
        correctAnswer: { id: 1, value: (<AntImage />) },
      },
      {
        id: 2,
        question: (<BeeSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<BeeImage />) },
          { id: 3, value: (<MosquitoImage />) },
          { id: 4, value: (<WormImage />) },
        ],
        correctAnswer: { id: 2, value: (<BeeImage />) },
      },
      {
        id: 3,
        question: (<SpiderSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<BeeImage />) },
          { id: 3, value: (<MosquitoImage />) },
          { id: 4, value: (<CockroachImage />) },
        ],
        correctAnswer: { id: 1, value: (<SpiderImage />) },
      },
      {
        id: 4,
        question: (<ButterflySound />),
        answers: [
          { id: 1, value: (<ButterflyImage />) },
          { id: 2, value: (<WormImage />) },
          { id: 3, value: (<FlyinsectImage />) },
          { id: 4, value: (<CockroachImage />) },
        ],
        correctAnswer: { id: 1, value: (<ButterflyImage />) },
      },
      {
        id: 5,
        question: (<WormSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<BeeImage />) },
          { id: 3, value: (<MosquitoImage />) },
          { id: 4, value: (<WormImage />) },
        ],
        correctAnswer: { id: 4, value: (<WormImage />) },
      },
      {
        id: 6,
        question: (<CockroachSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<BeeImage />) },
          { id: 3, value: (<GresshopperImage />) },
          { id: 4, value: (<CockroachImage />) },
        ],
        correctAnswer: { id: 4, value: (<CockroachImage />) },
      },
      {
        id: 7,
        question: (<GresshopperSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<AntImage />) },
          { id: 3, value: (<FlyinsectImage />) },
          { id: 4, value: (<GresshopperImage />) },
        ],
        correctAnswer: { id: 4, value: (<GresshopperImage />) },
      },
      {
        id: 8,
        question: (<MosquitoSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<WormImage />) },
          { id: 3, value: (<CockroachImage />) },
          { id: 4, value: (<MosquitoImage />) },
        ],
        correctAnswer: { id: 4, value: (<MosquitoImage />) },
      },
      {
        id: 9,
        question: (<FlyinsectSound />),
        answers: [
          { id: 1, value: (<SpiderImage />) },
          { id: 2, value: (<BeeImage />) },
          { id: 3, value: (<GresshopperImage />) },
          { id: 4, value: (<FlyinsectImage />) },
        ],
        correctAnswer: { id: 4, value: (<FlyinsectImage />) },
      },
      
    ],
};