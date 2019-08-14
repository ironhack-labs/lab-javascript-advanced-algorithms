const stack = new StackDataStructure({
  stackControl: [],
  MAX_SIZE: 6,
});

const stackInput = document.getElementById("input-stack");
const btnAddStack = document.querySelector(".addStack");
const btnRemoveStack = document.querySelector(".removeStack");

btnAddStack.onclick = function(){
  if(stack.canPush()){
    let stackDiv = document.createElement("div");
    let stackContainer = document.querySelector("section.container");
    stackContainer.appendChild(stackDiv);
    stackDiv.className = "stack";
    stackDiv.classList.add("is-active")
    stackDiv.innerHTML = stackInput.value;} 
  else {window.alert("Stack Overflow")};
  stack.push(stackInput.value);
  console.log(stack.stackControl)
}

btnRemoveStack.onclick = function(){
  if(!stack.isEmpty()){
    let stackContainer = document.querySelector("section.container");
    let stackDiv = document.querySelector(".container :last-child");
    stackContainer.removeChild(stackDiv);}
    else {window.alert("Stack Underflow")};
  stack.pop()
  console.log(stack.stackControl)
}