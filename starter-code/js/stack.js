
var stack = new StackDataStructure ();

stack.stackControl = [];

window.onload = function(){




var addButton = document.querySelector('.btn-add');
var takeButton = document.querySelector('.btn-take');
var underFlow = document.querySelector(".underflow");
var overFlow = document.querySelector(".overflow");
var boxStack = document.querySelector(".box-stack");
var boxOccupied = document.querySelector(".ocuppied");

addButton.onclick = addStack;
takeButton.onclick = takeStack;

function addStack(){

  var inputStack =  document.querySelector('input[id="stack"]').value;
  var boxRemove = document.querySelector(".box");

  if(stack.canPush() && inputStack !== ""){
    stack.push(inputStack);
    boxStack.insertBefore(createBox(inputStack), boxOccupied);
    boxStack.removeChild(boxRemove);
    underFlow.style.display = "none";
  } 
  else if(!stack.canPush()){
    overFlow.style.display = '';
  }
}


function createBox(inputStack){

  var divTag = document.createElement("div");
  divTag.classList.add("occupied");
  divTag.appendChild(document.createTextNode(inputStack));
  
  return divTag;
}

function takeStack(){
  if(!stack.isEmpty){
    underFlow.style.display = "";
  } else {
    stack.stackControl.pop();
  boxStack.removeChild(boxOccupied);
  overFlow.style.display = 'none';}
 
}

};
