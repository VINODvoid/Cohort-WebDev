import React from 'react'

const CustomTailwind = () => {
  return (
    <>
    <div className="text-center text-3xl">Flex Box</div>
      <div className="text-4xl bg-blue-300 rounded-3xl  flex justify-between ">
        <div className="bg-green-400 rounded-3xl">Child 1</div>
        <div className="bg-yellow-400 rounded-3xl">Child 2</div>
        <div className="bg-red-500 rounded-3xl">Child 3</div>
      </div>
      <div className="text-center text-3xl ">Grids</div>
      <div className="grid grid-cols-12 rounded-3xl">
        <div className="col-span-4 bg-green-300 ">Child 1</div>
        <div className="col-span-4 bg-yellow-300">Child 2</div>
        <div className="col-span-4 bg-red-400">Child 3</div>
      </div>
      <div>Responsiveness</div>
      <div className="grid  grid-cols-12 ">
        <div className="bg-green-300 col-span-12 sm:col-span-6">Child 1</div>
        <div className="bg-red-300 col-span-12 sm:col-span-4">Child 2</div>
        <div className="bg-pink-300 col-span-12 sm:col-span-2">Child 3</div>
      </div>
      <div className="bg-[#95190C] px-12">Custom Color for background</div>
      <div className="text-pink-700 px-12">Custom Color in text</div>
      
      <div className="rounded-4xl bg-amber-300">Border Radius</div>
    </>
  )
}

export default CustomTailwind