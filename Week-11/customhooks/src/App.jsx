// import { useState } from 'react'
import { useDeBounce } from '../hooks/useDebounce';
import './App.css'
// import { useFetch, usePosts } from '../hooks/useFetch';
// import { usePrev } from '../hooks/usePrev';

// custom hooks
// function useCounter()
// {
//   const [count,setCount ] = useState(0);
//   function increaseCount()
//   {
//     setCount(c=>c+1)
//   }
//   return {
//     count:count,
//     increaseCount:increaseCount
//   }
// }

function App() { 
  // const {count,increaseCount} = useCounter(1);
  // const post = usePosts();
  // const [click , setClick] = useState(1);
  // const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/todos/'+click,10000);
  // const prev = usePrev(count);
  // if(loading)
  // {
  //   return <div>
  //     <p>loading</p>
  //   </div>
  // }
  function searchBackend()
  {
    fetch('api.amazon.com/search/product');
  }
  const debouncedfn = useDeBounce(searchBackend);
  return (
    // <div>
    //   <h4>use fetch</h4>
    //   <div>
      
    //   {post.title}
    //   <div>
    //     {JSON.stringify(data)}

    //     { error ? error : null}
      

    //   </div>
    //   </div>
    //   <div>
    //     <button onClick={()=>setClick(click => click +1)}>Next Post</button>
    //   </div>
    //   <h4>use prev</h4>
    //   <div>
    //   {count}
    //   <button onClick={increaseCount}>Add</button>
    //     {
    //       <h6>{prev}</h6>
    //     }
    //   </div>
    // </div>
    <div>
      <input type="text"  onChange={debouncedfn}/>
    </div>
  )
}

export default App
  