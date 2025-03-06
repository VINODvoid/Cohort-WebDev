import {  useState,createContext , useContext } from 'react'
import BulbOn from './assets/idea.png'
import BulbOff from './assets/bulb.png'
import './App.css'

const BulbContext = createContext();


function BulbProvider({children})
{
  const [bulb,setBulb] = useState(true);
  return (

  
  <BulbContext.Provider value={{
    bulb:bulb,
    setBulb:setBulb,
  }}>
  {children}
  </BulbContext.Provider>
  )
}
function App() {

  return (
    <div>
      <BulbProvider>
        <Light/>
      </BulbProvider>
      
    </div>
  )
}
function Light()
{ 
  return (
    <div>
    <LightBulb />
    <LightSwitch />
    </div>
  )
}

function LightBulb()
{
  const {bulb} = useContext(BulbContext);
  return <div>
    {bulb ? <>
      <img src={BulbOn} alt=""  height={30}/>
    </>:
    <>
    <img src={BulbOff} alt=""  height={30}/>
    </>}
  </div>
}
function LightSwitch()
{
  const {bulb,setBulb} = useContext(BulbContext);
  return <div>
    <button onClick={()=>setBulb(!bulb)}>Switch</button>
  </div>
}
export default App;
