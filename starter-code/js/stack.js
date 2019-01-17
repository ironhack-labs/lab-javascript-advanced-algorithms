var stack = new StackDataStructure();


var structureStack = document.createElement("h1");
  structureStack.innerHTML=("Stack");
  document.querySelector("body").appendChild(structureStack);

var container = document.createElement("container");
document.querySelector("body").appendChild(container);


var btn_add = document.createElement("button");
  btn_add.innerHTML=("ADD");
  btn_add.setAttribute("style","background: blue");
  btn_add.setAttribute("id" , "addElement");
  document.querySelector("container").appendChild(btn_add);

var btn_take = document.createElement("button");
  btn_take.innerHTML=("TAKE");
  btn_take.setAttribute("style","background: red");
  btn_take.setAttribute("id" , "takeElement");
  document.querySelector("container").appendChild(btn_take);
 


  var dataEntry = document.createElement("input");
    dataEntry.setAttribute("placeholder", "Add the element to stack");
    document.querySelector("body").appendChild(dataEntry);
    dataEntry.setAttribute("id" , "stackElement");

var stackSlots;
for (var i = 0; i < stack.MAX_SIZE; i++) {
  stackSlots = document.createElement("div");
  document.querySelector("body").appendChild(stackSlots);
}

//var boton = document.que

//boton.addEventiListener("click",function(){
  
//})
window.onclick = function(e){
  
  var contentStack = stack.push(document.querySelector("input").value);
  var listDiv = document.querySelector("div");

      listDiv[stack.length] = contentStack;
  }
  

