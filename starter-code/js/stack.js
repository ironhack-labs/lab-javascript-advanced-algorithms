const stackDataStructure = new StackDataStructure()
let btnAStack = document.getElementById("btnAStack")
let btnTStack = document.getElementById("btnTStack")
let stackItem = document.getElementById("stackItem")
let divStack = document.getElementsByTagName("div")




// btnAStack
btnAStack.addEventListener('click', function () {
    let num = stackDataStructure.MAX_SIZE-1-stackDataStructure.stackControl.length
    if (num == 0){
        alert("Stack Overflow")
         
    }else{
    console.log(divStack)
    divStack[num].innerHTML = stackItem.value
     stackDataStructure.push(stackItem.value)
     
    }
});
btnTStack.addEventListener('click', function () {
    let num = stackDataStructure.MAX_SIZE  - stackDataStructure.stackControl.length
    if (stackDataStructure.stackControl.length == 0) {
        alert("Stack underflow")
    }else{
    console.log(divStack)
    divStack[num ].innerHTML = ""
    stackDataStructure.pop()
    }
});