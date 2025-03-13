import { useState } from 'react'
import './App.css'

// custom hooks
function useCounter()
{
  const [count,setCount ] = useState(0);
  function increaseCount()
  {
    setCount(c=>c+1)
  }
  return {
    count:count,
    increaseCount:increaseCount
  }
}

function App() { 
  const {count,increaseCount} = useCounter();
  const [post , setPost ] = useState({});
  async function getPosts()
  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const json = await response.json();
    setPost(json);
  }
  useState(()=>{
    getPosts();
  },[])
  return (
    <div>
      <button onClick={increaseCount}>Add</button>
      <div>
      {count}
      {post.title}
      </div>
    </div>
  )
}

export default App
  