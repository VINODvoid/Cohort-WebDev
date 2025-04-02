import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import {counterAtom} from './store/atoms/Counter'
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
    </div>
  )
}

function Increase()
{
  const setCount = useSetRecoilState(counterAtom);
  return(
    <button onClick={()=>{
      setCount(c=>c+1)
    }}>
      Increase
    </button>
  )
}function Decrease()
{
  const setCount = useSetRecoilState(counterAtom);
  return(
    <button onClick={()=>{
      setCount(c=>c-1)
    }}>
      Decrease
    </button>
  )
}
function CurrentValue()
{
  const count = useRecoilValue(counterAtom);
  return (
    <p>
      {count}
    </p>
  )
}
export default App;