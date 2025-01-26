import {useEffect,useState} from 'react';
// THIS IS ONE APPROACH WITHOUT DEPENDENCY ARRAY


// export default function App() {
//   const  [stopVariable,setStopVariable] = useState(true);
//   useEffect(()=>{
//     setInterval(()=>{
//       setStopVariable(stopVariable=>!stopVariable)
//     },5000)
//   },[])
//   return (
//     <div className='App'>

//       {/* contditional rerendering */}
//       {stopVariable &&  <Counter/>}
//       Another condition 
//       {/* { counterCondition ? <Counter/>:null} */}
//     </div>
//   );
// }

// function Counter()
// {
//   const [count , setCount ] = useState(0);
//   useEffect(()=>{
//     let clock = setInterval(function(){
//       console.log("Mounted");
//       setCount(count => count+1);
      
//     },1000);
//     return function()
//     {
//       clearInterval(clock)
//       console.log("Unmounted");
      
//     }
//   },[])
//   return <div>{count}</div>
  
// }


// THIS IS EASY AND VALID APPROACH
export default function App()
{
  const [count, setCount] = useState(0);
 return <div>
  <Counter count={count}/>
  <button onClick={()=>{setCount(count+1)}}>Increase</button>
  <button onClick={()=>{setCount(count-1)}}>Decrease</button>
 </div> 
}
function Counter(props)
{
useEffect(()=>{
  console.log("Count is changed");
  return function(){
    console.log("count is  cleared");
    
  }
},[props.count])
   return <div>
    {props.count}
   </div>
}