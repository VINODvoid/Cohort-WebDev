let count = 0; 
 function addTodo(){
    const   input = document.querySelector("input");
    const inputValue = input.value;
    const newElement = document.createElement("div");
    newElement.setAttribute("id",count);
    newElement.innerHTML = `<div>${inputValue} </div><button onclick=deleteTodo(${count})>Delete</button>`;
    
    const body = document.querySelector("body")
    body.appendChild(newElement)
    count += 1;
    inputValue=""
 }
function deleteTodo(index){
    console.log(index);
    
    const todoDiv = document.getElementById(index)
    todoDiv.parentNode.removeChild(todoDiv);
    
}