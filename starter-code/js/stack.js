var stack;

function addStack(){
  var item = document.getElementById('text2Add2Stack').value;
  if (stack.push(item) === "Stack Overflow") {
    alert("Stack Overflow");
  } else {
    printStack();
  }
}

function takeStack(){
  if (stack.pop() === "Stack Underflow") {
    alert("Stack Underfloor");
  }else{
    printStack();
  }
}

function printStack(){
  var stackDataStructure = document.getElementById('stackDataStructure');
  stackDataStructure.innerHTML = "";
  items = stack.stackControl.length;

  for (var j = 0; j < (10-items);j++) {
    stackDataStructure.innerHTML += "<div class='empty'></div>";
  }

  for (var i = items -1; i>=0; i--){
    stackDataStructure.innerHTML += "<div class='item'>"+ stack.stackControl[i] +"</div>";
  }
}
