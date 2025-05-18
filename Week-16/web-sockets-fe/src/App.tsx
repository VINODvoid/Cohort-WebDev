
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket ,setSocket] = useState<WebSocket | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage()
  {
    if (!socket) return;
    const message = inputRef.current.value;
    socket.send(message);
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:3000");
    setSocket(ws);
    ws.onmessage = (event)=>{
      console.log(event.data);
    }

  },
[])
  return (
    <>
    <div>
      <input type="text" placeholder='Enter the message ...' ref={inputRef}/>
      <button onClick={sendMessage}>Send</button>
    </div>
    </>
  )
}

export default App
