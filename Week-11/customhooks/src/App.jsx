import { useState } from 'react'
import './App.css'
import { useFetch, usePosts } from '../hooks/useFetch';

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
  const post = usePosts();
  const [click , setClick] = useState(1);
  const {finalData} = useFetch('https://jsonplaceholder.typicode.com/todos/'+click)

  // if(loading)
  // {
  //   return <div>
  //     <p>loading</p>
  //   </div>
  // }


  return (
    <div>
      <button onClick={increaseCount}>Add</button>
      <div>
      {count}
      {post.title}
      <div>
        
      {
        JSON.stringify(finalData)
      }

      </div>
      </div>
      <div>
        <button onClick={()=>setClick(click => click +1)}>Next Post</button>
      </div>
    </div>
  )
}

export default App
  