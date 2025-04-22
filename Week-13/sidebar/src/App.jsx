import './App.css'
import Siderbar from './components/Siderbar'
import ToggleTheme from './components/ToggleTheme'

function App() {

  return (
    <div className='flex'>
    {/* <Siderbar/> */}
    {/* <ToggleTheme/> */}
    {/* <Sidebar/> */}
    <MainComponent/>

    </div>
  )
}

function MainComponent()
{
  return(
      // <div className='grid grid-cols-12'>
      //   <div className="col-span-6 bg-amber-400"></div>
      //   <div className="col-span-4 bg-green-400"></div>
      //   <div className="col-span-2 bg-red-400"></div>
      // </div>
      
      <div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 ">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="col-span-2 row-span-2 ...">03</div>
</div>
  )
}
// function Sidebar()
// {
//   return (
//     <div>HI</div>
//   )
// }

export default App
