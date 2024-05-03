import CrySound from "../components/SoundsComponent/crySound";
import CryImage from "../components/ImagesComponent.jsx/cryImage";
import ClimbImage from "../components/ImagesComponent.jsx/climbImage";
import CarryImage from "../components/ImagesComponent.jsx/carryImage";
import CrawlImage from "../components/ImagesComponent.jsx/crawlImage";
import ClimbSound from "../components/SoundsComponent/climbSound";
import CarrySound from "../components/SoundsComponent/carrySound";
import CrawlSound from "../components/SoundsComponent/crawlSound";
import DanceSound from "../components/SoundsComponent/danceSound";
import DrinkSound from "../components/SoundsComponent/drinkSound";
import DrawSound from "../components/SoundsComponent/drawSound";
import DanceImage from "../components/ImagesComponent.jsx/danceImage";
import DrinkImage from "../components/ImagesComponent.jsx/drinkImage";
import DrawImage from "../components/ImagesComponent.jsx/drawImage";
import EatImage from "../components/ImagesComponent.jsx/eatImage";
import HangImage from "../components/ImagesComponent.jsx/hangImage";
import FightImage from "../components/ImagesComponent.jsx/fightImage";
import EatSound from "../components/SoundsComponent/eatSound";
import HangSound from "../components/SoundsComponent/hangSound";
import FightSound from "../components/SoundsComponent/fightSound";
import ListenImage from "../components/ImagesComponent.jsx/listenImage";
import LaughImage from "../components/ImagesComponent.jsx/laughImage";
import JumpImage from "../components/ImagesComponent.jsx/jumpImage";
import ListenSound from "../components/SoundsComponent/listenSound";
import LaughSound from "../components/SoundsComponent/laughSound";
import JumpSound from "../components/SoundsComponent/jumpSound";
import OpenSound from "../components/SoundsComponent/openSound";
import PaintSound from "../components/SoundsComponent/paintSound";
import PushSound from "../components/SoundsComponent/pushSound";
import PullSound from "../components/SoundsComponent/pullSound";
import PullImage from "../components/ImagesComponent.jsx/pullImage";
import PushImage from "../components/ImagesComponent.jsx/pushImage";
import PaintImage from "../components/ImagesComponent.jsx/paintImage";
import OpenImage from "../components/ImagesComponent.jsx/openImage";
import PlaySound from "../components/SoundsComponent/playSound";
import ReadSound from "../components/SoundsComponent/readSound";
import RideSound from "../components/SoundsComponent/rideSound";
import RideImage from "../components/ImagesComponent.jsx/rideImage";
import ReadImage from "../components/ImagesComponent.jsx/readImage";
import PlayImage from "../components/ImagesComponent.jsx/playImage";
import RunSound from "../components/SoundsComponent/runSound";
import SingSound from "../components/SoundsComponent/singSound";
import SitSound from "../components/SoundsComponent/sitSound";
import RunImage from "../components/ImagesComponent.jsx/runImage";
import SitImage from "../components/ImagesComponent.jsx/sitImage";
import SingImage from "../components/ImagesComponent.jsx/singImage";
import SleepImage from "../components/ImagesComponent.jsx/sleepImage";
import StandImage from "../components/ImagesComponent.jsx/standImage";
import SweepImage from "../components/ImagesComponent.jsx/sweepImage";
import SweepSound from "../components/SoundsComponent/sweepSound";
import StandSound from "../components/SoundsComponent/standSound";
import SleepSound from "../components/SoundsComponent/sleepSound";
import SwimSound from "../components/SoundsComponent/swimSound";
import ThrowSound from "../components/SoundsComponent/throwSound";
import WalkSound from "../components/SoundsComponent/walkSound";
import WalkImage from "../components/ImagesComponent.jsx/walkImage";
import ThrowImage from "../components/ImagesComponent.jsx/throwImage";
import SwimImage from "../components/ImagesComponent.jsx/swimImage";
import WatchImage from "../components/ImagesComponent.jsx/watchImage";
import WriteImage from "../components/ImagesComponent.jsx/writeImage";
import WashImage from "../components/ImagesComponent.jsx/washImage";
import WashSound from "../components/SoundsComponent/washSound";
import WriteSound from "../components/SoundsComponent/writeSound";
import WatchSound from "../components/SoundsComponent/watchSound";




export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: (<CrySound />),
        answers: [
          { id: 1, value: (<CryImage />) },
          { id: 2, value: (<CarryImage />) },
          { id: 3, value: (<CrawlImage />) },
          { id: 4, value: (<ClimbImage />) },
        ],
        correctAnswer: { id: 1, value: (<CryImage />) },
      },
      {
        id: 2,
        question: (<ClimbSound />),
        answers: [
          { id: 1, value: (<DanceImage />) },
          { id: 2, value: (<DrawImage />) },
          { id: 3, value: (<DrinkImage />) },
          { id: 4, value: (<ClimbImage />) },
        ],
        correctAnswer: { id: 4, value: (<ClimbImage />) },
      },
      {
        id: 3,
        question: (<DrawSound />),
        answers: [
          { id: 1, value: (<DrawImage />) },
          { id: 2, value: (<DanceImage />) },
          { id: 3, value: (<CrawlImage />) },
          { id: 4, value: (<CryImage />) },
        ],
        correctAnswer: { id: 1, value: (<DrawImage />) },
      },
      {
        id: 5,
        question: (<EatSound />),
        answers: [
          { id: 1, value: (<EatImage />) },
          { id: 2, value: (<FightImage />) },
          { id: 3, value: (<HangImage />) },
          { id: 4, value: (<CryImage />) },
        ],
        correctAnswer: { id: 1, value: (<EatImage />) },
      },
      {
        id: 6,
        question: (<ListenSound />),
        answers: [
          { id: 1, value: (<ListenImage />) },
          { id: 2, value: (<LaughImage />) },
          { id: 3, value: (<JumpImage />) },
          { id: 4, value: (<CryImage />) },
        ],
        correctAnswer: { id: 1, value: (<ListenImage />) },
      },
      {
        id: 7,
        question: (<OpenSound />),
        answers: [
          { id: 1, value: (<OpenImage />) },
          { id: 2, value: (<PushImage />) },
          { id: 3, value: (<PullImage />) },
          { id: 4, value: (<PaintImage />) },
        ],
        correctAnswer: { id: 1, value: (<OpenImage />) },
      },
      {
        id: 8,
        question: (<DanceSound />),
        answers: [
          { id: 1, value: (<DanceImage />) },
          { id: 2, value: (<OpenImage />) },
          { id: 3, value: (<EatImage />) },
          { id: 4, value: (<CryImage />) },
        ],
        correctAnswer: { id: 1, value: (<PaintImage />) },
      },
      {
        id: 9,
        question: (<SleepSound />),
        answers: [
          { id: 1, value: (<RideImage />) },
          { id: 2, value: (<StandImage />) },
          { id: 3, value: (<SleepImage />) },
          { id: 4, value: (<SweepImage />) },
        ],
        correctAnswer: { id: 3, value: (<SleepImage />) },
      },
      {
        id: 10,
        question: (<PaintSound />),
        answers: [
          { id: 1, value: (<PaintImage />) },
          { id: 2, value: (<OpenImage />) },
          { id: 3, value: (<PullImage />) },
          { id: 4, value: (<CryImage />) },
        ],
        correctAnswer: { id: 1, value: (<PaintImage />) },
      },
      {
        id: 11,
        question: (<PlaySound />),
        answers: [
          { id: 1, value: (<PlayImage />) },
          { id: 2, value: (<ReadImage />) },
          { id: 3, value: (<RideImage />) },
          { id: 4, value: (<ClimbImage />) },
        ],
        correctAnswer: { id: 1, value: (<PlayImage />) },
      },
      {
        id: 12,
        question: (<CarrySound />),
        answers: [
          { id: 1, value: (<DanceImage />) },
          { id: 2, value: (<CarryImage />) },
          { id: 3, value: (<RideImage />) },
          { id: 4, value: (<LaughImage />) },
        ],
        correctAnswer: { id: 2, value: (<CarryImage />) },
      },
      {
        id: 13,
        question: (<CrawlSound />),
        answers: [
          { id: 1, value: (<CryImage />) },
          { id: 2, value: (<CarryImage />) },
          { id: 3, value: (<CrawlImage />) },
          { id: 4, value: (<ReadImage />) },
        ],
        correctAnswer: { id: 3, value: (<CrawlImage />) },
      },
      {
        id: 14,
        question: (<RunSound />),
        answers: [
          { id: 1, value: (<CryImage />) },
          { id: 2, value: (<SitImage />) },
          { id: 3, value: (<RunImage />) },
          { id: 4, value: (<SingImage />) },
        ],
        correctAnswer: { id: 3, value: (<RunImage />) },
      },
      {
        id: 15,
        question: (<SwimSound />),
        answers: [
          { id: 1, value: (<CrawlImage />) },
          { id: 2, value: (<OpenImage />) },
          { id: 3, value: (<SwimImage />) },
          { id: 4, value: (<PullImage />) },
        ],
        correctAnswer: { id: 3, value: (<SwimImage />) },
      },
      {
        id: 16,
        question: (<WashSound />),
        answers: [
          { id: 1, value: (<WatchImage />) },
          { id: 2, value: (<WriteImage />) },
          { id: 3, value: (<WashImage />) },
          { id: 4, value: (<PushImage />) },
        ],
        correctAnswer: { id: 3, value: (<WashImage />) },
      },
      {
        id: 17,
        question: (<WatchSound />),
        answers: [
          { id: 1, value: (<WatchImage />) },
          { id: 2, value: (<WriteImage />) },
          { id: 3, value: (<CryImage />) },
          { id: 4, value: (<DrawImage />) },
        ],
        correctAnswer: { id: 1, value: (<WatchImage />) },
      },
      {
        id: 18,
        question: (<WriteSound />),
        answers: [
          { id: 1, value: (<ClimbImage />) },
          { id: 2, value: (<WriteImage />) },
          { id: 3, value: (<DrinkImage />) },
          { id: 4, value: (<DrawImage />) },
        ],
        correctAnswer: { id: 2, value: (<WriteImage />) },
      },
      {
        id: 19,
        question: (<ThrowSound />),
        answers: [
          { id: 1, value: (<CarryImage />) },
          { id: 2, value: (<ThrowImage />) },
          { id: 3, value: (<DrinkImage />) },
          { id: 4, value: (<SwimImage />) },
        ],
        correctAnswer: { id: 2, value: (<ThrowImage />) },
      },
      {
        id: 20,
        question: (<WalkSound />),
        answers: [
          { id: 1, value: (<CrawlImage />) },
          { id: 2, value: (<WalkImage />) },
          { id: 3, value: (<FightImage />) },
          { id: 4, value: (<SwimImage />) },
        ],
        correctAnswer: { id: 2, value: (<WalkImage />) },
      },
      {
        id: 21,
        question: (<StandSound />),
        answers: [
          { id: 1, value: (<SitImage />) },
          { id: 2, value: (<StandImage />) },
          { id: 3, value: (<RunImage />) },
          { id: 4, value: (<SwimImage />) },
        ],
        correctAnswer: { id: 2, value: (<StandImage />) },
      },
      {
        id: 22,
        question: (<SweepSound />),
        answers: [
          { id: 1, value: (<StandImage />) },
          { id: 2, value: (<SitImage />) },
          { id: 3, value: (<RideImage />) },
          { id: 4, value: (<SweepImage />) },
        ],
        correctAnswer: { id: 4, value: (<SweepImage />) },
      },
      {
        id: 23,
        question: (<SitSound />),
        answers: [
          { id: 1, value: (<EatImage />) },
          { id: 2, value: (<SitImage />) },
          { id: 3, value: (<FightImage />) },
          { id: 4, value: (<SweepImage />) },
        ],
        correctAnswer: { id: 2, value: (<SitImage />) },
      },
      {
        id: 24,
        question: (<SingSound />),
        answers: [
          { id: 1, value: (<StandImage />) },
          { id: 2, value: (<WalkImage />) },
          { id: 3, value: (<ReadImage />) },
          { id: 4, value: (<SingImage />) },
        ],
        correctAnswer: { id: 4, value: (<SingImage />) },
      },
      {
        id: 25,
        question: (<ReadSound />),
        answers: [
          { id: 1, value: (<HangImage />) },
          { id: 2, value: (<ClimbImage />) },
          { id: 3, value: (<WriteImage />) },
          { id: 4, value: (<ReadImage />) },
        ],
        correctAnswer: { id: 4, value: (<ReadImage />) },
      },
      {
        id: 26,
        question: (<RideSound />),
        answers: [
          { id: 1, value: (<ClimbImage />) },
          { id: 2, value: (<DanceImage />) },
          { id: 3, value: (<SwimImage />) },
          { id: 4, value: (<RideImage />) },
        ],
        correctAnswer: { id: 4, value: (<RideImage />) },
      },
      {
        id: 27,
        question: (<PushSound />),
        answers: [
          { id: 1, value: (<SitImage />) },
          { id: 2, value: (<ListenImage />) },
          { id: 3, value: (<PullImage />) },
          { id: 4, value: (<PushImage />) },
        ],
        correctAnswer: { id: 4, value: (<PushImage />) },
      },
      {
        id: 28,
        question: (<PullSound />),
        answers: [
          { id: 1, value: (<CarryImage />) },
          { id: 2, value: (<DanceImage />) },
          { id: 3, value: (<PushImage />) },
          { id: 4, value: (<PullImage />) },
        ],
        correctAnswer: { id: 4, value: (<PullImage />) },
      },
      {
        id: 29,
        question: (<JumpSound />),
        answers: [
          { id: 1, value: (<RideImage />) },
          { id: 2, value: (<SweepImage />) },
          { id: 3, value: (<JumpImage />) },
          { id: 4, value: (<LaughImage />) },
        ],
        correctAnswer: { id: 3, value: (<JumpImage />) },
      },
      {
        id: 30,
        question: (<LaughSound />),
        answers: [
          { id: 1, value: (<ReadImage />) },
          { id: 2, value: (<ListenImage />) },
          { id: 3, value: (<LaughImage />) },
          { id: 4, value: (<SweepImage />) },
        ],
        correctAnswer: { id: 3, value: (<LaughImage />) },
      },
      {
        id: 31,
        question: (<HangSound />),
        answers: [
          { id: 1, value: (<HangImage />) },
          { id: 2, value: (<ThrowImage />) },
          { id: 3, value: (<ListenImage />) },
          { id: 4, value: (<SwimImage />) },
        ],
        correctAnswer: { id: 1, value: (<HangImage />) },
      },
      {
        id: 32,
        question: (<FightSound />),
        answers: [
          { id: 1, value: (<HangImage />) },
          { id: 2, value: (<ClimbImage />) },
          { id: 3, value: (<LaughImage />) },
          { id: 4, value: (<FightImage />) },
        ],
        correctAnswer: { id: 4, value: (<FightImage />) },
      },

      
    ],
};