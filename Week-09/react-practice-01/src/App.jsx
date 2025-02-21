import { useState } from 'react'
import {Clock} from 'lucide-react'
import './App.css'
import PostComponent from './Post';
import Notification from './Notification';

function App() {
  const [posts,setPosts] = useState([]);
  
  const postComponents = posts.map(post=>
    <PostComponent 
    name={post.name} 
    description={post.description}
    subTitle={post.subTitle}
    image={post.image}
    time={post.time}
    />
  )
  function addPost()
  {
    setPosts([...posts,{
      name:"Kalki",
      description:"lorem ispsum description",
      time:"2 min",
      subTitle:"100k",
      image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    }])
    }
    
  return (
    // <div>
    //   {/* <ToggleMessage/> */}
    //   <Notification/>
    //   <Notification/>
    //   <Notification/>
    // </div>
    <div style={{height:"100vh",width:"100vw",backgroundColor:"#dfe6e9",}}>
      <Notification/>
      
      <button onClick={addPost}>Add Post</button>
      <div style={{display:'flex',justifyContent:"center",}}>
        <div style={{margin:20}}>
          <div>
            {
              postComponents
            }
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
