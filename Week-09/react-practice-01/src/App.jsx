import { useState } from 'react'
import {Clock} from 'lucide-react'
import './App.css'

function App() {
  return (
    // <div>
    //   {/* <ToggleMessage/> */}
    //   <Notification/>
    //   <Notification/>
    //   <Notification/>
    // </div>
    <div style={{height:"100vh",width:"100vw",backgroundColor:"#dfe6e9",}}>
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
        <div>
            <PostComponent
            name={"Kalki"}
            description={"lorem ispsum description"}
            subTitle={"100k"}
            image={"https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg"}
            />
          </div>
        </div>
    </div>
    </div>
  )
}
const style = {borderRadius:10,width:300,borderColor:"gray",backgroundColor:"white",borderWidth:1,padding:20}
function PostComponent({name, description , time , subTitle,image })
{
  return (
    <div style={style}>
    <div style={{display:"flex"}}>
      <img src={image} alt="" style={{
        width:30,
        height:30,
        borderRadius:20,
      }} />
      <div style={{marginLeft:10,fontSize:10}}>
        <b>{name}</b>
        <div>{subTitle} follower</div>
        {time!== undefined &&<div style={{display:"flex"}}>
          <div style={{marginRight:5
          }}>{time} </div>
          <Clock style={{width:10,height:10}}/>
        </div>}
      </div>
    </div>
    <div style={{fontSize:12}}>
      {description}
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
