
const Input = () => {
    function focusInput()
    {
        document.getElementById("name").focus()
    }
  return (
    <div>
        Sign up 
        <input type="text" id="name"></input>
        <input type="text" ></input>
        <button onClick={focusInput}>Submit</button>
    </div>
  )
}

export default Input