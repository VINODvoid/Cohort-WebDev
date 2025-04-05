import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import {counterAtom, evenSelector} from './store/atoms/Counter'
function App()
{
  return (
    <div>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </div>
  )
}

function Counter()
{
  return (
    <div>
      <Increase/>
      <Decrease/>
      <CurrentValue/>
      <IsEven/>
    </div>
  )
}

function Increase()
{
  const setCount = useSetRecoilState(counterAtom);
  return(
    <button onClick={()=>{
      setCount(c=>c+2)
    }}>
      Increase
    </button>
  )
}function Decrease()
{
  const setCount = useSetRecoilState(counterAtom);
  return(
    <div>

    <button onClick={()=>{
      setCount(c=>c-1)
    }}>
      Decrease
    </button>
    </div>
  )
}
function CurrentValue()
{
  const count = useRecoilValue(counterAtom);
  return (
    <p>
      <b>
      {count}</b>
    </p>
  )
}


function IsEven()
{
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ?"Even":"Odd"}
  </div>
}
export default App;