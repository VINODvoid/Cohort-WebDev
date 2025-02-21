import { useState } from 'react'
import {Clock} from 'lucide-react'
import './App.css'
import PostComponent from './Post';

function App() {
  function addPost()
  {
    console.log("Post Added");
  }
  return (
    // <div>
    //   {/* <ToggleMessage/> */}
    //   <Notification/>
    //   <Notification/>
    //   <Notification/>
    // </div>
    <div style={{height:"100vh",width:"100vw",backgroundColor:"#dfe6e9",}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display:'flex',justifyContent:"center",}}>
        <div style={{margin:20}}>
          <div>
            <PostComponent
            name={"Kalki"}
            description={"lorem ispsum description"}
            time={"2 min"}
            subTitle={"100k"}
            image={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
            />
            <br />
          </div>
        </div>
    </div>
    </div>
  )
}

// Conditional Rendering
// function ToggleMessage()
// {
//   const [isVisible,setIsVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={()=>setIsVisible(!isVisible)}>Toggle Message</button>
//       {isVisible && <p>Message is visible</p>}
//     </div>
//   )
// }

// function Notification()
// {
//   const [notificationCount,setNotificationCount] = useState(0);
//   return (
//     <div>
//       <button onClick={()=>setNotificationCount(notificationCount+1)}>Increase Count</button>
//       {<p> {notificationCount}</p>}
//     </div>
//   )
// }
export default App
