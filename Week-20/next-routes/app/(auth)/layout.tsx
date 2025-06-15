import React, { ReactNode } from 'react'

const Authlayout = ({children}:Readonly<{children:ReactNode}>) => {
  return (
    <div>
        <h1 className='text-3xl font-bold '>Sample Routes</h1>
        {children}
    </div>
  )
}

export default Authlayout