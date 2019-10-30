let stack = new StackDataStructure()

let addStackButton = document.getElementById("addStack")
let takeStackButton = document.getElementById("takeStack")
let elementosStack = document.getElementsByClassName("stack")
let textStack = document.getElementById("nameStack")

function addStack() {
    stack.push(textStack.value)
    let num = stack.MAX_SIZE - stack.stackControl.length
    elementosStack[num].innerText = textStack.value
    elementosStack[num].style.backgroundColor = "palevioletred"
}

function takeStack() {
    
    let num = stack.MAX_SIZE - stack.stackControl.length - 1
    elementosStack[num].innerText = ""
    elementosStack[num].style.backgroundColor = "white"
}


addStackButton.addEventListener("click", function () {
if(stack.canPush()){
    addStack()
} else {
    alert("Stack Overflow")
}
})

takeStackButton.addEventListener("click", function () {
    if(stack.isEmpty()){
        alert("Stack Underflow")
    } else if (stack.pop()){    
        takeStack()
    }
    })