import ChestImage from "../components/ImagesComponent.jsx/chestImage";
import ChestSound from "../components/SoundsComponent/chestSound";
import EyeImage from "../components/ImagesComponent.jsx/eyeImage";
import EyeSound from "../components/SoundsComponent/eyeSound";
import LipsImage from "../components/ImagesComponent.jsx/lipsImage";
import LipsSound from "../components/SoundsComponent/lipsSound";
import ShoulderSound from "../components/SoundsComponent/shoulderSound";
import ShoulderImage from "../components/ImagesComponent.jsx/shoulderImage";
import ArmImage from "../components/ImagesComponent.jsx/armImage";
import ArmSound from "../components/SoundsComponent/armSound";
import LegImage from "../components/ImagesComponent.jsx/legImage";
import LegSound from "../components/SoundsComponent/legSound";
import FootImage from "../components/ImagesComponent.jsx/footImage";
import FootSound from "../components/SoundsComponent/footSound";
import NeckImage from "../components/ImagesComponent.jsx/neckImage";
import NeckSound from "../components/SoundsComponent/neckSound";
import BellybuttonImage from "../components/ImagesComponent.jsx/bellybutton";
import BellybuttonSound from "../components/SoundsComponent/bellybuttonSound";
import ElbowImage from "../components/ImagesComponent.jsx/elbowImage";
import ElbowSound from "../components/SoundsComponent/elbowSound";
import HandImage from "../components/ImagesComponent.jsx/handImage";
import HandSound from "../components/SoundsComponent/handSound";
import KneeImage from "../components/ImagesComponent.jsx/KneeImage";
import KneeSound from "../components/SoundsComponent/kneeSound";
import TongueImage from "../components/ImagesComponent.jsx/tongueImage";
import TongueSound from "../components/SoundsComponent/tongueSound";
import HeadImage from "../components/ImagesComponent.jsx/headImage";
import HairImage from "../components/ImagesComponent.jsx/hairImage";
import TeethImage from "../components/ImagesComponent.jsx/teethImage";
import TeethSound from "../components/SoundsComponent/teethSound";
import EarImage from "../components/ImagesComponent.jsx/earImage";
import EarSound from "../components/SoundsComponent/earSound";
import HeadSound from "../components/SoundsComponent/headSound";
import NoseImage from "../components/ImagesComponent.jsx/noseImage";
import HairSound from "../components/SoundsComponent/hairSound";
import FingerSound from "../components/SoundsComponent/fingerSound";
import FingerImage from "../components/ImagesComponent.jsx/fingerImage";








export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<KneeSound />),
        answers: [
          { id: 1, value: (<KneeImage />) },
          { id: 2, value: (<LipsImage />) },
          { id: 3, value: (<FootImage />) },
          { id: 4, value: (<HeadImage />) },
        ],
        correctAnswer: { id: 1, value: (<KneeImage />) },
      },
      {
        id: 2,
        question: (<HandSound />),
        answers: [
          { id: 1, value: (<LipsImage />) },
          { id: 2, value: (<ElbowImage />) },
          { id: 3, value: (<ChestImage />) },
          { id: 4, value: (<HandImage />) },
        ],
        correctAnswer: { id: 4, value: (<HandImage />) },
      },
      {
        id: 3,
        question: (<BellybuttonSound />),
        answers: [
          { id: 1, value: (<TongueImage/>) },
          { id: 2, value: (<EyeImage />) },
          { id: 3, value: (<ShoulderImage />) },
          { id: 4, value: (<BellybuttonImage />) },
        ],
        correctAnswer: { id: 4, value: (<BellybuttonImage />) },
      },
      {
        id: 4,
        question: (<LegSound />),
        answers: [
          { id: 1, value: (<LegImage />) },
          { id: 2, value: (<HandImage />) },
          { id: 3, value: (<FootImage />) },
          { id: 4, value: (<EyeImage />) },
        ],
        correctAnswer: { id: 1, value: (<LegImage />) },
      },
       {
        id: 5,
        question: (<FootSound />),
        answers: [
          { id: 1, value: (<FootImage />) },
          { id: 2, value: (<HairImage />) },
          { id: 3, value: (<ArmImage />) },
          { id: 4, value: (<HandImage />) },
        ],
        correctAnswer: { id: 1, value: (<FootImage />) },
      },
      {
        id: 6,
        question: (<ChestSound />),
        answers: [
          { id: 1, value: (<ChestImage />) },
          { id: 2, value: (<ElbowImage />) },
          { id: 3, value: (<EyeImage />) },
          { id: 4, value: (<BellybuttonImage />) },
        ],
        correctAnswer: { id: 1, value: (<ChestImage />) },
      },
      {
        id: 7,
        question: (<ElbowSound />),
        answers: [
          { id: 1, value: (<ElbowImage />) },
          { id: 2, value: (<HandImage />) },
          { id: 3, value: (<TongueImage />) },
          { id: 4, value: (<TeethImage />) },
        ],
        correctAnswer: { id: 1, value: (<ElbowImage />) },
      },
       {
        id: 7,
        question: (<TongueSound />),
        answers: [
          { id: 1, value: (<TongueImage />) },
          { id: 2, value: (<KneeImage />) },
          { id: 3, value: (<HeadImage />) },
          { id: 4, value: (<EyeImage />) },
        ],
        correctAnswer: { id: 1, value: (<TongueImage />) },
      },
      {
        id: 8,
        question: (<NeckSound />),
        answers: [
          { id: 1, value: (<NeckImage />) },
          { id: 2, value: (<EarImage />) },
          { id: 3, value: (<HairImage />) },
          { id: 4, value: (<TeethImage />) },
        ],
        correctAnswer: { id: 1, value: (<NeckImage />) },
      },
      {
        id: 9,
        question: (<EarSound />),
        answers: [
          { id: 1, value: (<ShoulderImage />) },
          { id: 2, value: (<ChestImage />) },
          { id: 3, value: (<EarImage />) },
          { id: 4, value: (<HairImage />) },
        ],
        correctAnswer: { id: 3, value: (<EarImage />) },
      },
      {
        id: 10,
        question: (<ShoulderSound />),
        answers: [
          { id: 1, value: (<FootImage />) },
          { id: 2, value: (<BellybuttonImage />) },
          { id: 3, value: (<HairImage />) },
          { id: 4, value: (<ShoulderImage />) },
        ],
        correctAnswer: { id: 4, value: (<ShoulderImage />) },
      },
      {
        id: 11,
        question: (<TeethSound />),
        answers: [
          { id: 1, value: (<FootImage />) },
          { id: 2, value: (<BellybuttonImage />) },
          { id: 3, value: (<TongueImage />) },
          { id: 4, value: (<TeethImage />) },
        ],
        correctAnswer: { id: 4, value: (<TeethImage />) },
      },
      {
        id: 12,
        question: (<EarSound />),
        answers: [
          { id: 1, value: (<ChestImage />) },
          { id: 2, value: (<LipsImage />) },
          { id: 3, value: (<HairImage />) },
          { id: 4, value: (<EarImage />) },
        ],
        correctAnswer: { id: 4, value: (<EarImage />) },
      },
      {
        id: 13,
        question: (<EyeSound />),
        answers: [
          { id: 1, value: (<LegImage />) },
          { id: 2, value: (<EarImage />) },
          { id: 3, value: (<TongueImage />) },
          { id: 4, value: (<EyeImage />) },
        ],
        correctAnswer: { id: 4, value: (<EyeImage />) },
      },
     {
        id: 15,
        question: (<LipsSound />),
        answers: [
          { id: 1, value: (<EyeImage />) },
          { id: 2, value: (<ChestImage />) },
          { id: 3, value: (<KneeImage />) },
          { id: 4, value: (<LipsImage />) },
        ],
        correctAnswer: { id: 4, value: (<LipsImage />) },
      },
      {
        id: 16,
        question: (<HeadSound />),
        answers: [
          { id: 1, value: (<HeadImage />) },
          { id: 2, value: (<FootImage />) },
          { id: 3, value: (<ElbowImage />) },
          { id: 4, value: (<NoseImage />) },
        ],
        correctAnswer: { id: 1, value: (<HeadImage />) },
      },
      {
        id: 16,
        question: (<ArmSound />),
        answers: [
          { id: 1, value: (<FootImage/>) },
          { id: 2, value: (<LipsImage />) },
          { id: 3, value: (<ElbowSound />) },
          { id: 4, value: (<ArmImage />) },
        ],
        correctAnswer: { id: 4, value: (<ArmImage />) },
      },
      {
        id: 17,
        question: (<HairSound />),
        answers: [
          { id: 1, value: (<HairImage />) },
          { id: 2, value: (<LegImage />) },
          { id: 3, value: (<FootImage />) },
          { id: 4, value: (<BellybuttonImage />) },
        ],
        correctAnswer: { id: 1, value: (<HairImage />) },
      },
      {
        id: 18,
        question: (<FingerSound />),
        answers: [
          { id: 1, value: (<KneeImage />) },
          { id: 2, value: (<FootImage />) },
          { id: 3, value: (<ArmImage />) },
          { id: 4, value: (<FingerImage />) },
        ],
        correctAnswer: { id: 4, value: (<FingerImage />) },
      },
      /* {
        id: 19,
        question: (<MiimSound />),
        answers: [
          { id: 1, value: (<LaamImage />) },
          { id: 2, value: (<TaaImage />) },
          { id: 3, value: (<MiimImage />) },
          { id: 4, value: (<NuunImage />) },
        ],
        correctAnswer: { id: 3, value: (<MiimImage />) },
      },
      {
        id: 20,
        question: (<NuunSound />),
        answers: [
          { id: 1, value: (<TaaImage />) },
          { id: 2, value: (<BaaImage />) },
          { id: 3, value: (<ShiinImage />) },
          { id: 4, value: (<NuunImage />) },
        ],
        correctAnswer: { id: 4, value: (<NuunImage />) },
      },
      {
        id: 21,
        question: (<WaawSound />),
        answers: [
          { id: 1, value: (<TaaeImage />) },
          { id: 2, value: (<ThsaaeImage />) },
          { id: 3, value: (<ZaaeImage />) },
          { id: 4, value: (<WaawImage />) },
        ],
        correctAnswer: { id: 4, value: (<WaawImage />) },
      },
      {
        id: 22,
        question: (<YaaSound />),
        answers: [
          { id: 1, value: (<TaaImage />) },
          { id: 2, value: (<AlifImage />) },
          { id: 3, value: (<YaaeImage />) },
          { id: 4, value: (<ShiinImage />) },
        ],
        correctAnswer: { id: 3, value: (<YaaeImage />) },
      },
      {
        id: 23,
        question: (<HaeSound />),
        answers: [
          { id: 1, value: (<ThsaaeImage />) },
          { id: 2, value: (<BaaImage />) },
          { id: 3, value: (<HaeImage />) },
          { id: 4, value: (<SiinImage />) },
        ],
        correctAnswer: { id: 3, value: (<HaeImage />) },
      },
      {
        id: 24,
        question: (<QaafSound />),
        answers: [
          { id: 1, value: (<GiimImage />) },
          { id: 2, value: (<AlifImage />) },
          { id: 3, value: (<QaafImage />) },
          { id: 4, value: (<KaafImage />) },
        ],
        correctAnswer: { id: 3, value: (<QaafImage />) },
      } */
    
      



      
    ],

};