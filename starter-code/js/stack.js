var input = document.createElement("input");
var buttonAdd = document.createElement("button");
var buttonTake = document.createElement("button");
var divDiv = document.createElement("div");
var divMenu = document.createElement("div");
var label = document.createElement("label");

var father = document.querySelector(".container");
father.appendChild(divMenu).setAttribute("id","divMenu");
divMenu.appendChild(divDiv).setAttribute("id","divGlobal");
var divMenu = document.querySelector("#divMenu");
var divGlobal = document.querySelector("#divGlobal");

divMenu.appendChild(input);
divMenu.appendChild(buttonAdd).innerText = "Add";
buttonAdd.setAttribute("class","add");
divMenu.appendChild(buttonTake).innerText = "Take";
buttonTake.setAttribute("class","pop");
divMenu.appendChild(label).innerText = "LIFO";

var stack = new StackDataStructure();

for (var i = 0; i < stack.MAX_SIZE; i++){
    var div = document.createElement("div");
    divGlobal.appendChild(div).setAttribute("class","tamaño");
}

buttonAdd.onclick = function(){
    if(stack.canPush()){
        stack.push(input.value);
        var selector = divGlobal.childNodes[stack.MAX_SIZE - (stack.stackControl.length)];
        selector.innerText = `${input.value}`;
        selector.setAttribute("class","selected");
    } 
}

buttonTake.onclick = function(){
    if(stack.isEmpty){
        stack.pop(input.value);
        var selector = divGlobal.childNodes[stack.MAX_SIZE - (stack.stackControl.length+1)];
        selector.innerText = "";
        selector.setAttribute("class","tamaño");
    } 
}

