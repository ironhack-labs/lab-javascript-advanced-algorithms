const addStack = document.getElementById("add_stack");
const remove_Stack = document.getElementById("remove_stack");
const stackList = document.getElementById("stackList");
const stack = new StackDataStructure(10);

console.log(stack.MAX_SIZE)

console.log(stack)

// Handler

function stackCreate(){
    
    const toAdd = document.getElementById("input_stack").value || "default";
    const newDiv = document.createElement("div")
    newDiv.innerHTML = toAdd;

    if (stack.push(toAdd)) stackList.appendChild(newDiv);
    
    console.log(stack.stackControl)

}

function stackRemove(){

    
    let to_rmv = stackList.lastChild;

    (stack.stackControl.pop()) ? stackList.removeChild(to_rmv):alert(`Stack Underflow : ${stack.stackControl}`);
    console.log(stack.stackControl)

}

// onClick



addStack.onclick = stackCreate;
remove_Stack.onclick = stackRemove;

