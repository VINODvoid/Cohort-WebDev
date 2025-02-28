import { useRef } from "react"

const Input = () => {
    const inputRef = useRef();
    function focusInput()
    {
        // bad pratice on react 
        // document.getElementById("name").focus()
        inputRef.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder="Click the button to focus me "/>
        
        <button onClick={focusInput}>Focus the input</button>
    </div>
  )
}

export default Input