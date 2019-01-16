var input2 = document.createElement("input");
var buttonAdd2 = document.createElement("button");
var buttonTake2 = document.createElement("button");
var divDiv2 = document.createElement("div");
var divMenu2 = document.createElement("div");
var label = document.createElement("label");

var father2 = document.querySelector(".container");
father2.appendChild(divMenu2).setAttribute("id","divMenu2");
divMenu2.appendChild(divDiv2).setAttribute("id","divGlobal2");
var divMenu2 = document.querySelector("#divMenu2");
var divGlobal2 = document.querySelector("#divGlobal2");

divMenu2.appendChild(input2);
divMenu2.appendChild(buttonAdd2).innerText = "Add";
buttonAdd2.setAttribute("class","add");
divMenu2.appendChild(buttonTake2).innerText = "Take";
buttonTake2.setAttribute("class","pop");
divMenu2.appendChild(label).innerText = "FIFO";

var queue = new QueueDataStructure();

for (var i = 0; i < queue.MAX_SIZE; i++){
    var div = document.createElement("div");
    divGlobal2.appendChild(div).setAttribute("class","tamaño");
}

buttonAdd2.onclick = function(){
    if(queue.canEnqueue()){
        queue.enqueue(input2.value);
       
        for(var i = queue.queueControl.length; i > 0 ;i--){
            var selector = divGlobal2.childNodes[queue.MAX_SIZE - i];
            if(i === 1){
                selector.innerText = `${input2.value}`;
            } 
            else{
                var selectorFrom = divGlobal2.childNodes[queue.MAX_SIZE - (i -1)];
                selector.innerText = selectorFrom.innerText;
            }
            selector.setAttribute("class","selected");
        }
        
    } 
}


buttonTake2.onclick = function(){
    if(queue.isEmpty){
        queue.dequeue(input2.value);
        var selector = divGlobal2.childNodes[queue.MAX_SIZE - (queue.queueControl.length+1)];
        selector.innerText = "";
        selector.setAttribute("class","tamaño");
    } 
}

