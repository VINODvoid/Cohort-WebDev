import { useState } from 'react'
import './App.css'
import { useFetch } from '../hooks/useFetch';

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
  const post = useFetch();
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
  