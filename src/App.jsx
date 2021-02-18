import { useEffect, useState } from 'react';
import './App.css';
import ActionRow from './components/ActionRow';
import Clock from './components/Clock';
import NAvBar from './components/NavBar';
import Test from './components/Test';

function App() {
  const [minutes, setMinutes] = useState('25')
  const [seconds, setSeconds] = useState('00')
  const [timer, setTimer] = useState(0)
  const [isWorkMode, setIsWorkMode] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const start = function (){
    //starts the timer by setting an interval, and calling the runLogic method

  }
  

  const pause = function () {
    // will clear the interval and stop the timer
  }

  const reset = function () {
    // will pause the timer, and reset the state minutes/seconds 
    //(according to the isWorkMode property)
  }

  const finished = function () {
    // stops the timer and resets the time to the next mode
    // (will be called when the time is equal to 0)

  }
  const changeMode = function (breakOrWork) {
    // receives a parameter ('break' or 'work' mode) 
    //and updates the state properties to the relevant mode,
    // also invokes the reset metho
  }
    const runLogic = function () {
    // the logical method tha will be called every second.
    // This method should check if the timer ended
    // (as to not to run time negatively) and format the minutes and seconds 
    //(the format should be 04:03 or 21:09, not 4:3 or 21:9).
  }

  const activateAction = function () {
    isActive === true ? start() : pause()
  }

  const startInterval = function () {

    setInterval(() => {
      setSeconds(prevSeconds => prevSeconds < 1 ? 59 : prevSeconds - 1)
    }, 1000)
    setInterval(() => {
      setMinutes(prevMinutes => prevMinutes < 1 ? 59 : prevMinutes - 1)
    }, 60000)

  }

  // const runLogic = function(){
  //   let timer = {minutes, seconds}
  //   timer.seconds = setInterval(() => {
  //     setSeconds(prevSeconds => prevSeconds < 1 ? 59 : prevSeconds - 1)
  //   }, 1000)
  //   timer.minutes = setInterval(() => {
  //     setMinutes(prevMinutes => prevMinutes < 1 ? 59 : prevMinutes - 1)
  //   }, 60000)

  //   return timer
  // }


  // const interval = function(){
  //   setTimer(
  //     setInterval(()=>runLogic())
  //   )
  // }


const stopInterval = function () {
  console.log('this should stop the interval');
  clearInterval() 
}



  return (
    <div className="App">
      <h2>App component</h2>
      <button onClick={() => startInterval()}>interval</button>
      <button onClick={() => stopInterval()}>Stop</button>

      
      <NAvBar changeMode={changeMode} />
      <Clock minutes={minutes} seconds={seconds} />
      <ActionRow activateAction={activateAction} reset={reset} currentAction={isActive} />

    </div>
  );
}

export default App;
