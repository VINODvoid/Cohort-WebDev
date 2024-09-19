let count = 0; 
 function addTodo(){
    const input = document.querySelector("input");
    const inputValue = input.value;
    const newElement = document.createElement("div");
    newElement.setAttribute("id",count);
    count += 1;
    newElement.innerHTML = "<div>"+inputValue+ "</div><button onclick='deleteTodo("+count+")'>Delete</button>";

    const body = document.querySelector("body")
    body.appendChild(newElement)
 }
function deleteTodo(index){
    console.log(index);
    
    const todoDiv = document.getElementById(index)
    todoDiv.parentNode.removeChild(todoDiv);
    // if (todoDiv)
    // {
    //     todoDiv.parentNode.removeChild(todoDiv)
    // }
}