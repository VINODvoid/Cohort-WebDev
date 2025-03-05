import { useEffect, useRef, useState } from "react"

const Scroll = () => {
  const [messages,setMessages] = useState(["Hi, How are you ? ;)"]);
  const ref = useRef(null);

  function addMessage()
  {
    setMessages((prevMessages) => [...prevMessages,"New Message"])
  }
  useEffect(()=>{
    ref.current.scrollTop = ref.current.scrollHeight;
  },[messages])
  return (
    <div>
      <div 
      ref={ref}
      style={{
        height:"300px",
        border:"1px solid black",
        overflowY:"scroll",
      }}>
        {
          messages.map((msg,index)=>{
            return(
              <div id={index} key={index}>{msg}</div>
            )
          })
        }
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  )
}

export default Scroll