const stack = new StackDataStructure();

let inputStack = document.getElementById("inputStack");
let addStackBtn = document.getElementById("addStackbtn");
let takesStackbtn = addocument.getElementById("takeStackbtn");

let liDomEl = document.createElement("li");

inputStack.onclick = function() {
let inputValue = inputStack.value;
let listArray = [...document.querySelectorAll("list-group")];
listArray.push(inputValue);

stackColumn.appendChild(liDomEl).innerText = inputValue;
}


listArray[listArray.length -1].innerText
