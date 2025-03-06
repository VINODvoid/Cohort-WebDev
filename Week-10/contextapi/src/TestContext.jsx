import React, { createContext, useState } from 'react'

const CountContext = createContext();

function CountProvider ({children})
{
    const [count , setCount ] = useState(0);
    
    return (
        <CountContext.Provider value={{
            count:count,
            setCount:setCount
            
}}>
            {children}
        </CountContext.Provider>
    )
}

const TestContext = () => {
  return (
    <div></div>
  )
}

export default TestContext