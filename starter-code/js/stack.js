var input = document.createElement("input");
var buttonAdd = document.createElement("button");
var buttonTake = document.createElement("button");
var stack = new StackDataStructure();

var father = document.querySelector(".container");
father.appendChild(input).setAttribute("class", "size");
father.appendChild(buttonAdd).setAttribute("class", "size");
father.appendChild(buttonTake).setAttribute("class", "size");


for (var i = 0; i < stack.MAX_SIZE; i++){
  var div = document.createElement("div");
  father.appendChild(div).setAttribute("class", "size");
}

buttonAdd.onclick = function(){
  if(stack.canPush()){
    stack.push(input.value);
    father.lastChild.setAttribute("class", "selected");
  }

  buttonTake.onclick = function(){
    if(stack.isEmpty){
      stack.pop(input.value);
      father.lastChild.setAttribute("class", "size");
    }
  }
}

