let stack = new StackDataStructure ()
let stackDOM = document.querySelector(".stack");
let addBtn = document.getElementById("add").addEventListener("click", addItem);
let takeBtn = document.getElementById("take").addEventListener("click", takeItem);
let valueStack = "";
let valueStackList= "";




printList();

function printList() {
    stackItem = "";

    for (let i=0; i<stack.MAX_SIZE; i++){
        stackItem = document.createElement("li");
        stackItem.classList.add ("empty")
        stackDOM.appendChild(stackItem);
    }
}

function addItem(){
    if (stack.canPush()){
        valueStack = document.querySelector(".input-lg").value; //Lo que escribes para añadir
        valueStackList = document.querySelectorAll(".empty");
        valueStackList[valueStackList.length-1].innerHTML = valueStack;
        valueStackList[valueStackList.length-1].classList.remove("empty");
        valueStackList[valueStackList.length-1].classList.add("full");
        stack.push(valueStack);
    } else {
        alert (`Estoy hasta los huevos`)
    }
}

function takeItem(){
    if (stack.isEmpty()){ 
        alert (`Estoy fundioooooooooo`)
    } else {
        valueStackList = document.querySelectorAll(".full");
        valueStackList[0].innerHTML = "";
        valueStackList[0].classList.remove("full");
        valueStackList[0].classList.add("empty");
        stack.pop(valueStack);
    }
}
