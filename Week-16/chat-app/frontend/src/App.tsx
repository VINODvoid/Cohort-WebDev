import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["hi how you", "hello", "whats upp"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket | null>(null); // WebSocket reference

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    wsRef.current = ws;

    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };

    return () => {
      ws.close(); 
    };
  }, []);

  function sendMessage() {
    const message = inputRef.current?.value;
    if (message && wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message: message,
          },
        })
      );
      if (inputRef.current) {
        inputRef.current.value = ""; 
      }
    }
  }

  return (
    <div className="h-screen bg-black flex flex-col text-white">
      <div className="h-[95vh] p-12 overflow-y-auto">
        {messages.map((message, idx) => (
          <div key={idx} className="m-8 flex">
            <span className="p-4 bg-slate-900 text-white rounded-xl text-2xl">
              {message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full">
        <input
          type="text"
          className="p-4 m-4 rounded-2xl w-[90%] bg-slate-900 flex-1 border-none"
          ref={inputRef}
          placeholder="Enter the message"
        />
        <button
          className="rounded-xl p-4 m-2 text-2xl border-blue-600 border bg-blue-400"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
