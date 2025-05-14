

export interface ButtonProps {
    type:"primary" | "secondary",
    size :"sm"| "md" | "lg",
    text:string,
    startIcon : any,
    endIcon?:any
    onClick:()=>void
}

const Button = (props:ButtonProps) => {
  return (
    <button className="text-2xl shadow-2xl">Button</button>
  )
}

export default Button