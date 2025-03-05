import { useRef } from "react";
import { useState } from "react"

const Clock = () => {
  const [ currentCount , setCurrentCount ] =  useState(1);
  const timer = useRef();
  function startClock()
  {
    let count = setInterval(()=>{
      setCurrentCount((count)=>count+1)
    },1000)
    timer.current= count;
  }
  function stopClock()
  {
    console.log(timer);
    
    clearInterval(timer.current);
  }
  return (
    <div>
      {currentCount} <br />
        <button onClick={startClock}>Start</button>
        <br />
        <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default Clock