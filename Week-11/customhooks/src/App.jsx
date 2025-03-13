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
  return (
    <div>
      <button onClick={increaseCount}>Add</button>
      {count}
    </div>
  )
}

export default App
 