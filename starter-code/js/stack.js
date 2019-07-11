
let stack = new StackDataStructure()

let input = document.querySelector('#input')

let addButton = document.querySelector("#add")

let takeButton = document.querySelector("#take")

let stackElements = document.querySelectorAll(".stack")

let overflowElm = document.querySelector("#overflow") 

let underflowElm = document.querySelector("#underflow")

let stackPos = stack.MAX_SIZE-1

addButton.onclick = function(){
    let data = input.value
    if (data.trim() === "")
        return

    let pushable = stack.canPush()
    let result = stack.push(data)
    
    if (pushable) {
        stackElements[stackPos--].innerHTML= data
        underflowElm.innerHTML = ""
        stackElements.style.background = "blue"
        // underflowElm.style.background = "red"
    } else {
        overflowElm.innerHTML = result 
    }
    
}

takeButton.onclick = function(){
    let notPoppable = stack.isEmpty()
    
    let popResult = stack.pop()

    if (notPoppable) {
        underflowElm.innerHTML = popResult
    } else {
       stackElements[++stackPos].innerHTML = ""
       overflowElm.innerHTML = ""
    }
}