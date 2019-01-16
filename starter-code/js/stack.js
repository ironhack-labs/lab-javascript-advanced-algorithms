document.addEventListener('DOMContentLoaded', function () {

var stack = new StackDataStructure ();

var addButton = document.querySelector('.btn');

addButton.onclick = addStack();

function addStack(){

  var inputTextStack =  document.querySelector("#input-stack").value;
  
  if(stack.canPush() && inputTextStack !== ""){
    //underFlow.style.display = "none";
    stack.push(inputTextStack);
    
  } 
  
}
}

