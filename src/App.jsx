import { useState } from 'react';
import './App.css';
import ActionRow from './components/ActionRow';
import Clock from './components/Clock';
import NAvBar from './components/NavBar';

function App() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isWorkMode, setIsWorkMode] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const start = function(){
    //starts the timer by setting an interval, and calling the tick method
  }

  const pause = function(){
    // will clear the interval and stop the timer
  }

  const reset = function(){
    // will pause the timer, and reset the state minutes/seconds 
    //(according to the isWorkMode property)
  }

  const finished = function(){
    // stops the timer and resets the time to the next mode
    // (will be called when the time is equal to 0)
  
  }
  const changeMode = function(breakOrWork){
    // receives a parameter ('break' or 'work' mode) 
    //and updates the state properties to the relevant mode,
    // also invokes the reset method
  }

  const tick = function(){
    // the logical method that will be called every second.
    // This method should check if the timer ended
    // (as to not to run time negatively) and format the minutes and seconds 
    //(the format should be 04:03 or 21:09, not 4:3 or 21:9).
  }

  const activateAction = function(){
    isActive === true ? start() : pause() 
  }




  
  

  return (
    <div className="App">
     App component
     <NAvBar changeMode={changeMode} />
     <Clock minutes={minutes} seconds={seconds} />
     <ActionRow activateAction={activateAction} reset={reset} currentAction={isActive} />
    </div>
  );
}

export default App;
