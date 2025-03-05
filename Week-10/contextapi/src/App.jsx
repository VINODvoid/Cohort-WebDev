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
  return (
    <div>
    <BulbState/>
    <ToggleBulbState/>
    </div>
  )
}

function BulbState()
{
  return <div>
    BulbState
  </div>
}
function ToggleBulbState()
{
  return <div>ToggleBulbState</div>
}
export default App
