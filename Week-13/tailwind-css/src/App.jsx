import './App.css'

function App() {  

  return (
    <>
    <div className='text-center text-3xl'>Flex Box</div>
    <div className='text-4xl bg-blue-300 rounded-3xl  flex justify-between '>
    <div className='bg-green-400 rounded-3xl'>Child 1</div>
    <div className='bg-yellow-400 rounded-3xl'>Child 2</div>
    <div className='bg-red-500 rounded-3xl'>Child 3</div>
    </div>
    <div className='text-center text-3xl '>Grids</div>
    <div className='grid grid-cols-12 rounded-3xl'>
      <div className='col-span-4 bg-green-300 '>Child 1</div>
      <div className='col-span-4 bg-yellow-300'>Child 2</div>
      <div className='col-span-4 bg-red-400'>Child 3</div>
    </div>
    </>
  )
}

export default App
