let stackData = new StackDataStructure();

let stackS = document.getElementById('stack')
let stackAdd = document.getElementById("stack-add")
let stackTake = document.getElementById("stack-take")
let stackInput = document.getElementById("stack-input")
let elStackTake = document.getElementById("stackId")
let stackElements;

for (var i = -1; i <= stack.MAX_SIZE; i++) {
  $stack.appendChild(document.createElement('li'))
}

stackElements = stack.getElementsByTagName('li')

stackTake.onclick = function () {
  let i = 0;
  let element = stack.pop()
  if (element != "Stack Underflow") {
   
    stackElements[0].innerHTML = ""
    stackElements[0].className = ""
   
    i = stack.MAX_SIZE - stack.stackControl.length
    stackElements[i].innerHTML = ""
    stackElements[i].className = ""
    
    elStackTake.innerHTML = element
  } else {
    
    stackElements[stack.MAX_SIZE + 1].innerHTML = "Stack Underflow"
    stackElements[stack.MAX_SIZE + 1].className = "underflow"
  }
}
stackAdd.onclick = function () {
  let i = 0;
  stackInput.focus()
  if (stackInput.value == "") {
    alert("no puede añadir un elemento vacio")

    
  }
  function stackDelete (){
  if (stackS.push(stackInput.value) != "Stack Overflow") {
    
    elStackTake.innerHTML = ""
   
    stackElements[stack.MAX_SIZE + 1].innerHTML = ""
    stackElements[stack.MAX_SIZE + 1].className = ""
    
    i = stack.MAX_SIZE - stack.stackControl.length + 1
    stackElements[i].innerHTML = stackInput.value;
    stackElements[i].className = "lleno"
    
    stackInput.value = ""
  } else {
    
    stackElements[0].innerHTML = "Stack Overflow"
    stackElements[0].className = "overflow"
  }
}
}
