import {BrowserRouter , Routes , Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to={"/"}>Home</Link>
        <Link to={"/route-1"}>Route 1 </Link>
        <Link to={"/route-2"}>Route 2 </Link>
        <Link to={"/route-3"}>Route 3 </Link>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/route-1' element={<Component1/>} />
        <Route path='/route-2' element={<Component2/>} />
        <Route path='/route-3' element={<Component3/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

function Home()
{
  return <div>
    Home 
  </div>
}

function Component1()
{
  return <div>
    Route to 1 
  </div>
}
function Component2()
{
  return <div>
    Route to 2 
  </div>
}
function Component3()
{
  return <div>
    Route to 3
  </div>
}
function PageNotFound()
{
  return <div>
    Sorry you have reached the pinnacle of the MISERY.
  </div>
}
export default App
