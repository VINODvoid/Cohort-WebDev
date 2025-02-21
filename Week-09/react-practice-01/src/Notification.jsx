import React, {useState} from 'react';
function Notification(){
    const [count , setCount] = useState(1);
    function increaseCount()
    {
      setCount(count+1);
    }

    return (
        <div>
            <div style={{backgroundColor:"red", width:20, height:20,marginLeft:10,borderRadius:20,textAlign:'center'}}>{count}</div>
            <div style={{height:20, width:35,marginBottom:15}}><img src="https://imgs.search.brave.com/lA8LKfWA01j2ZT2rRar7aXV__e4qsfwg0FEijcs2_mA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MDAxODc0MC9waG90/by9iZWxsLWRyYXdp/bmcteW91LWhhdmUt/YS1uZXctbm90aWZp/Y2F0aW9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1qUVhV/QlMyeFUtWnNUa201/ZVlvZGswb0NScFhO/akJEVUFLZ0t4Q2ta/ekNZPQ" alt="bell-icon" width={35} /></div>
            <button onClick={increaseCount}>Increase Notification Count </button>

        
        </div>
    )
}

export default Notification;