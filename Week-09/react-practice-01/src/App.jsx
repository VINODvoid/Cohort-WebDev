import { useState } from 'react'
import './App.css'
import PostComponent from './Post';
import Notification from './Notification';
import Tab from './Tab';
import Card from './Card';
import MyComponent from './MyComponent';
import ErrorBoundary from '../ ErrorBoundary'


function App() {
  const [posts,setPosts] = useState([]);
  
  const postComponents = posts.map(post=>
    // eslint-disable-next-line react/jsx-key
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
    <div style={{height:"100%",width:"100%"}}>
      <Tab/>
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
    <div >
      <Card ><div style={{color:""}}>hi there</div></Card>
      <Card >
        what do you want to do ?
        <br />
        <br />
        <input placeholder='Enter the words you want'/>

        </Card>
    </div>
    <MyComponent/>
    <ErrorBoundary>
      <ErrorComponent/>
    </ErrorBoundary>
      <ErrorComponent1/>
      <ErrorBoundary>
        <ErrorComponent2/>
      </ErrorBoundary>
    </div> 
  )
}
function ErrorComponent()
{
  throw  new Error("some thing ");
  
}
function ErrorComponent1()
{
  return (
    <div>
      <h1>hi there</h1>
    </div>
  )
}
function ErrorComponent2()
{
  throw new Error("some thing went wrong");
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
