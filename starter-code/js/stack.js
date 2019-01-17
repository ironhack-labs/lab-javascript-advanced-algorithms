var stack = new StackDataStructure();
stack.MAX_SIZE = 6;

var stackHTML = document.querySelector("#stack")
var text = document.querySelector("#text")
var take = document.querySelector("#take")

//Creamos la columna inicial
for(var a = 0;a < stack.MAX_SIZE; a++){
  var div = document.createElement("div")
  div.className = "col"
  div.className += " stackDiv"
  stackHTML.appendChild(div);

}

var divStack = document.querySelectorAll(".stackDiv")

add.addEventListener("click",function(){

  var pos = stack.stackControl.length
  stack.push(text.value);
  
  divStack[pos].style.background = "red"
  divStack[pos].innerHTML = text.value


})


take.addEventListener("click",function(){
  stack.pop()
  var div = document.querySelectorAll(".col")
  
 
  for(var a = 0; a < stack.stackControl.length+1;a++){

    
    div[a].style.background = ""
    div[a].innerHTML = ""
  }

  console.log(stack.stackControl.length)
  for(var b = 0; b < stack.stackControl.length;b++){

    div[b].style.background = "red"
    div[b].innerHTML = stack.stackControl[b]
  }
  
  
})
