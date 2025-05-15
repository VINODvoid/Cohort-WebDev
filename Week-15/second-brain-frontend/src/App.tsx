import './App.css'
import Button from './components/ui/Button'
import {PlusIcon} from "lucide-react"
import ShareIcon from './icons/ShareIcon'
function App() {

  return (
    <>
    <Button onClick={()=>{}}  text='Add Content' type='primary' size='sm' startIcon={<PlusIcon/>} />
    <Button onClick={()=>{}}  text='Share Brain' type='secondary' size='md' startIcon={<ShareIcon/>}/>
    <Button onClick={()=>{}}  text='Large' type='primary' size='lg' />
    </>
  )
}


export default App
