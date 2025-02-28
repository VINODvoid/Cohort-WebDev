import {BrowserRouter , Routes , Route, Link, Outlet } from 'react-router-dom';
import Input from './Input';

function App() {
  return (
    <div>
      <BrowserRouter>
        
      <Routes> 
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/route-1' element={<Component1/>} />
          <Route path='/route-2' element={<Component2/>} />
          <Route path='/route-3' element={<Component3/>} />
          <Route path='/*' element={<PageNotFound/>} />
          <Route path='/input' element={<Input/>} />
          
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
function Layout()
{
  return (
    <div style={{height:'100vh'}}>
      {/* Header */}
      <Header/>
      {/* Components */}
      <div style={{height:'90vh'}}>
      <Outlet/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
function Header()
{
  return (
    <>
    <Link to={"/"}>Home</Link>
        <Link to={"/route-1"}>Route 1 </Link>
        <Link to={"/route-2"}>Route 2 </Link>
        <Link to={"/route-3"}>Route 3 </Link>
        <Link to={"/input"}>Use Ref</Link>
    </>
  )
}
function Footer(){
  return (
    <div>
      Website | Contact Us
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
