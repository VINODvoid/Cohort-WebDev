import {Routes,Route} from 'react-router-dom'
import AppLayout from './AppLayout'
function App() {
  return (
   <div>
   <Routes>
      <Route path='/' element={<AppLayout/>} >
        <Route path='/courses' element={<></>}/>
        <Route path='/test-series' />
        <Route path='/scholarships' />
        <Route path='/results' />
        <Route path='/study-materials' />
        <Route path='/about-us' />
      </Route>
   </Routes>
   </div>
  )
}
export default App
