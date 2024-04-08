import CarSound from "../components/SoundsComponent/carSound";
import CarImage from "../components/ImagesComponent.jsx/carImage";
import BusImage from "../components/ImagesComponent.jsx/busImage";
import AirplaneImage from "../components/ImagesComponent.jsx/airplaneImage";
import SubmarineImage from "../components/ImagesComponent.jsx/submarineImage";
import BusSound from "../components/SoundsComponent/busSound";
import HelicopterImage from "../components/ImagesComponent.jsx/helicopterImage";
import BicycleImage from "../components/ImagesComponent.jsx/bicycleImage";
import ShipImage from "../components/ImagesComponent.jsx/shipImage";
import AirplaneSound from "../components/SoundsComponent/airplaneSound";
import HelicopterSound from "../components/SoundsComponent/helicopterSound";
import TrainImage from "../components/ImagesComponent.jsx/trainImage";
import BoatImage from "../components/ImagesComponent.jsx/boatImage";
import TrainSound from "../components/SoundsComponent/trainSound";
import ShipSound from "../components/SoundsComponent/shipSound";
import BoatSound from "../components/SoundsComponent/boatSound";
import SubmarineSound from "../components/SoundsComponent/submarineSound";
import BicycleSound from "../components/SoundsComponent/bicycleSound";



export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<CarSound />),
        answers: [
          { id: 1, value: (<CarImage />) },
          { id: 2, value: (<BusImage />) },
          { id: 3, value: (<AirplaneImage />) },
          { id: 4, value: (<SubmarineImage />) },
        ],
        correctAnswer: { id: 1, value: (<CarImage />) },
      },
      {
        id: 2,
        question: (<BusSound />),
        answers: [
          { id: 1, value: (<BicycleImage />) },
          { id: 2, value: (<BusImage />) },
          { id: 3, value: (<CarImage />) },
          { id: 4, value: (<ShipImage />) },
        ],
        correctAnswer: { id: 2, value: (<BusImage />) },
      },
      {
        id: 3,
        question: (<AirplaneSound />),
        answers: [
          { id: 1, value: (<BicycleImage />) },
          { id: 2, value: (<AirplaneImage />) },
          { id: 3, value: (<HelicopterImage />) },
          { id: 4, value: (<BoatImage />) },
        ],
        correctAnswer: { id: 2, value: (<AirplaneImage />) },
      },
      {
        id: 4,
        question: (<HelicopterSound />),
        answers: [
          { id: 1, value: (<TrainImage />) },
          { id: 2, value: (<SubmarineImage />) },
          { id: 3, value: (<HelicopterImage />) },
          { id: 4, value: (<ShipImage />) },
        ],
        correctAnswer: { id: 3, value: (<HelicopterImage />) },
      },
      {
        id: 5,
        question: (<TrainSound />),
        answers: [
          { id: 1, value: (<TrainImage />) },
          { id: 2, value: (<BicycleImage />) },
          { id: 3, value: (<SubmarineImage />) },
          { id: 4, value: (<BoatImage />) },
        ],
        correctAnswer: { id: 1, value: (<TrainImage />) },
      },
      {
        id: 6,
        question: (<ShipSound />),
        answers: [
          { id: 1, value: (<CarImage />) },
          { id: 2, value: (<ShipImage />) },
          { id: 3, value: (<HelicopterImage />) },
          { id: 4, value: (<SubmarineImage />) },
        ],
        correctAnswer: { id: 2, value: (<ShipImage />) },
      },
      {
        id: 7,
        question: (<BoatSound />),
        answers: [
          { id: 1, value: (<SubmarineImage />) },
          { id: 2, value: (<CarImage />) },
          { id: 3, value: (<TrainImage />) },
          { id: 4, value: (<BoatImage />) },
        ],
        correctAnswer: { id: 4, value: (<BoatImage />) },
      },
      {
        id: 8,
        question: (<SubmarineSound />),
        answers: [
          { id: 1, value: (<SubmarineImage />) },
          { id: 2, value: (<CarImage />) },
          { id: 3, value: (<TrainImage />) },
          { id: 4, value: (<AirplaneImage />) },
        ],
        correctAnswer: { id: 1, value: (<SubmarineImage />) },
      },
      {
        id: 9,
        question: (<BicycleSound />),
        answers: [
          { id: 1, value: (<SubmarineImage />) },
          { id: 2, value: (<CarImage />) },
          { id: 3, value: (<TrainImage />) },
          { id: 4, value: (<BicycleImage />) },
        ],
        correctAnswer: { id: 4, value: (<BicycleImage />) },
      },
    ],
};