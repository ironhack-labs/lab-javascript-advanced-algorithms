class StackDataStructure  {
  stackControl = [];
  MAX_SIZE = 9;
  constructor(){

  }

  isEmpty(){
    return this.stackControl.length == 0 ? true : false;
  }

  canPush(){
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  push(a){
      if (this.canPush()) {
        this.stackControl.push(a);
        return this.stackControl;
      }else{
        return "Stack Overflow";
      }         
  }

  pop(){
    if(this.stackControl.length == 0){
      return 'Stack Underflow';
    }else{
      return this.stackControl.pop();
    }
  }
}

var stack = new StackDataStructure();


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
 

  for (let index = 1; index <= stack.MAX_SIZE; index++) {
    html += '<div class="stack-place"></div>';    
  }
  
  document.querySelector('#area-stack').innerHTML = html;

  var buttonadd = document.getElementById("button-add");
  buttonadd.onclick = add;

  var buttontake = document.getElementById("button-take");
  buttontake.onclick = take;
  
});




function clearStacks(nodesClass, newColor = "#EDEDED") {
  const nodelist = document.querySelectorAll('.'+nodesClass);  
  for (var i = 0; i < nodelist.length; i++) {
    nodelist[i].style.backgroundColor = newColor;
    nodelist[i].innerHTML = "";
  }
}

function assignStack(stackArray, nodesClass, newColor = "#3B85BF",error = false){
  const nodelist = document.querySelectorAll('.'+nodesClass);  
  var offSet = nodelist.length - stackArray.length;
  debugger
  for (var i = 0; i < stackArray.length; i++) {
    if (stackArray[i].includes('Stack') && error){
    nodelist[offSet + i].style.backgroundColor =  '#F4E3E2';
    nodelist[offSet + i].style.color = 'red';
  }
    else {nodelist[offSet + i].style.backgroundColor = newColor;
    nodelist[offSet + i].style.color = 'white';}
    nodelist[offSet + i].innerHTML = stackArray[i];
    
  }
}

function add(){
  var getStack = stack.push(document.getElementById("valueadd").value);
  clearStacks("stack-place", "#EDEDED");
  //debugger
  if(getStack === 'Stack Overflow'){
    arrayToPrint = [getStack, 'I','R','O','N','H','A','C','K' ];
    assignStack(arrayToPrint, "stack-place", "#3B85BF" , true);
  }else {
    arrayToPrint = stack.stackControl;
    assignStack(arrayToPrint, "stack-place","#3B85BF",false);
  };
}

function take(){
  var getStack = stack.pop();
  var arrayToPrint = [];
  clearStacks("stack-place", "#EDEDED");
  if(getStack === 'Stack Underflow'){
    arrayToPrint = ['','','','','','','','',getStack];
    assignStack(arrayToPrint, "stack-place", "#EDEDED", true);
  }else {
    arrayToPrint = stack.stackControl;
    assignStack(arrayToPrint, "stack-place");
  };
}