var stack = new StackDataStructure()

document.getElementById("addButton").onclick = function () {
    let item = document.getElementById("inputValue2").value 
    stack.push(item)

    let iterStack = new StackDataStructure()
    iterStack.stackControl = [...stack.stackControl]

    var list = document.querySelectorAll(".items")

    for (i = list.length - iterStack.stackControl.length; i < list.length; i++){
        list[i].innerHTML = iterStack.pop()
    }
    
   
}


document.getElementById("takeButton").onclick = function () {
    stack.pop()

    let iterStack = new StackDataStructure()
    iterStack.stackControl = [...stack.stackControl]

    var list = document.querySelectorAll(".items")

    for (i = 0; i < list.length; i++){
        list[i].innerHTML = ""
    } 

    for (i = list.length - iterStack.stackControl.length; i < list.length; i++){
        list[i].innerHTML = iterStack.pop()
    }
}
