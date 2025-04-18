import { Moon, Sun } from 'lucide-react';
import React, {  useState} from 'react'
import { cn } from '../lib/utils'

const ToggleTheme = () => {
    
  return (
    < >
    <div className={cn()}>
   <SwitchTheme/>
    </div>
    </>
  )
}

function SwitchTheme()
{
    const [toggleTheme , setToggleTheme] = useState(false);
return (
    <div onClick={()=>{
        setToggleTheme(!toggleTheme)
    }}>{toggleTheme?<Moon/>:<Sun/>}
    </div>
)
}


export default ToggleTheme