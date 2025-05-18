
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket , setSocket] = useState<WebSocket| undefined>();
  const inputValue = useRef<HTMLInputElement>(null);
  
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage=((e)=>{
      console.log(e.data);
    });
    setSocket(ws);

  },[]);
  function sendMessage()
  {
    const message:string | undefined = inputValue.current?.value;
    socket?.send(typeof(message)=== "string" ? message :"");
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
