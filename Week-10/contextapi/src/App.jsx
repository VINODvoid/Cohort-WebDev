import { useState } from 'react'
import BulbOn from './assets/idea.png'
import BulbOff from './assets/bulb.png'

import './App.css'

function App() {


  return (
    <div>
      <LightBulb/>
    </div>
  )
}

function LightBulb()
{
  const [bulb,setBulb] = useState(true);
  return (
    <div>
    <BulbState bulb={bulb}/>
    <ToggleBulbState bulb={bulb} setBulb={setBulb}/>
    </div>
  )
}

function BulbState({bulb})
{
  return <div>
    {bulb ? <>
      <img src={BulbOn} alt=""  height={30}/>
    </>:
    <>
    <img src={BulbOff} alt=""  height={30}/>
    </>}
  </div>
}
function ToggleBulbState({setBulb,bulb})
{
  return <div>
    <button onClick={()=>setBulb(!bulb)}>Switch</button>
  </div>
}
export default App
