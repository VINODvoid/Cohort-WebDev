import {useEffect,useState} from 'react';

export default function App() {
  const  [stopVariable,setStopVariable] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setStopVariable(stopVariable=>!stopVariable)
    },5000)
  },[])
  return (
    <div className='App'>

      {/* contditional rerendering */}
      {stopVariable &&  <Counter/>}
      Another condition 
      {/* { counterCondition ? <Counter/>:null} */}
    </div>
  );
}

function Counter()
{
  const [count , setCount ] = useState(0);
  useEffect(()=>{
    let clock = setInterval(function(){
      console.log("Mounted");
      setCount(count => count+1);
      
    },1000);
    return function()
    {
      clearInterval(clock)
      console.log("Unmounted");
      
    }
  },[])
  return <div>{count}</div>
  
}
