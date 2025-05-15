import type { ReactElement } from "react"


interface ButtonProps {
    type:"primary" | "secondary",
    size :"sm"| "md" | "lg",
    text:string,
    startIcon ?: ReactElement,
    endIcon?:any
    onClick:()=>void
}

const VariantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" :"bg-purple-200 text-purple-500",
}
const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" :"px-4 py-2",
    "lg":"py-8 px-4"
}
const defaultStyles = "rounded-md  m-2 flex"


const Button = (props:ButtonProps) => {
  return (
    <button className={`${defaultStyles} ${VariantStyles[props.type]} ${sizeStyles[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}
        {props.text}
    </button>
  )
}

export default Button