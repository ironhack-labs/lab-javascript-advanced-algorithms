

var stack = new StackDataStructure ();

var addButton = document.querySelector('.btn .add');

addButton.onclick = addStack();

function addStack(){

  var inputTextStack =  document.querySelector("#input-stack").value;
  
  if(stack.canPush() && inputTextStack !== ""){
    
    stack.push(inputTextStack);
    
  } 
  
}


