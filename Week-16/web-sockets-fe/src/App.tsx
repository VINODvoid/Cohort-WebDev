
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const inputValue = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage=((e)=>{
      console.log(e.data);
    })
  },[]);
  function sendMessage()
  {
  }
  return (
    <>
    <div>
      <input type="text" placeholder='Enter the Message' ref={inputValue} />    
      <button onClick={sendMessage} >Send</button>
    </div>
    </>
  )
}

export default App
