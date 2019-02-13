var stack = new StackDataStructure();

var stacker = document.querySelector("#adder-stack")
var destacker = document.querySelector("#taker-stack")
var userText = document.querySelector("#text-entry-stack")
var emptyStack = document.querySelectorAll(".empty-stack")
var elementPopped = document.querySelector("#stack-pop")



stacker.onclick= function (){
    if(stack.canPush()===true){
        stack.push(userText.value)
        var reference = stack.MAX_SIZE - stack.stackControl.length
        emptyStack[reference].className="stack-added"
        emptyStack[reference].innerHTML=userText.value
    }
    else{
        var stackParent = document.querySelector("#stack")
        var firstStackContainer = document.querySelector(".stack-added")
        var stackOverflow = document.createElement('div')
        stackOverflow.className="stack-overflow"
        console.log(stackOverflow)
        var text = document.createTextNode("Stack Overflow")
        stackOverflow.appendChild(text)
        stackParent.insertBefore(stackOverflow,firstStackContainer)
    }
    userText.value = ""
}

destacker.onclick= function (){
    if(stack.isEmpty()===true){
        var stackParent = document.querySelector("#stack")
        var stackUnderflow = document.createElement('div')
        stackUnderflow.className="stack-overflow"
        console.log(stackUnderflow)
        var text = document.createTextNode("Stack Underflow")
        stackUnderflow.appendChild(text)
        stackParent.appendChild(stackUnderflow)
        console.log("Can't take a number. The stack is empty!")
    }
    else{
        var reference = stack.MAX_SIZE - stack.stackControl.length
        elementPopped.innerHTML = emptyStack[reference].innerHTML
        emptyStack[reference].className="empty-stack"
        emptyStack[reference].innerHTML=""
        stack.pop()
    }
}