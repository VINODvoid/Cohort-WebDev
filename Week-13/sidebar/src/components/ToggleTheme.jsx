import { Moon, Sun } from 'lucide-react';
import React, {  useState} from 'react'
import { cn } from '../lib/utils'

const ToggleTheme = () => {
    const [toggleTheme , setToggleTheme] = useState(false);
  return (
    < >
    <div className={cn(toggleTheme?"dark:bg-blue-400 text-green":"bg-white text-black")} onClick={()=>{
        setToggleTheme(!toggleTheme)
    }}>{toggleTheme?<Moon/>:<Sun/>}
    </div>
    </>
  )
}

export default ToggleTheme