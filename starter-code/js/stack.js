let input = document.getElementById("input");
let Buttons = document.getElementsByTagName("button");
let stackElements = document.getElementsByClassName("stack-element");
let addButton = Buttons[0];
let takeButton = Buttons[1];
let stack = new StackDataStructure();
let index = stack.MAX_SIZE-1;
let indexOut = 4;
let overFlowDiv = document.getElementById('stack-overflow');


function addElement(){
  if(stack.canPush()){
  console.log(input.value,index);
  stack.push(input.value);
  stackElements[index].innerText = stack.pop();
  index--;
}else{
  overFlowDiv.innerHTML = stack.push();
}
}

function takeElement(){
  console.log(stack)
  stack.stackControl.pop();
  //index = 0;  
  for(let i=0; i<stack.stackControl.length;i++) {
    console.log(indexOut,stack.stackControl[i]);
    stackElements[indexOut].innerText = stack.stackControl[i];
    indexOut--;
  }
    indexOut--;

}