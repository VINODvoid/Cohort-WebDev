import React from 'react'
import { cn } from '../lib/utils'

const Button = ({ disabled, children,onClick}) => {
  return (
    <div onClick={onClick} className={cn("text-white cursor-pointer py-12 px-8",disabled ? "bg-blue-400" : "bg-green-500")}>
      {children}
    </div>
  )
}

export default Button
