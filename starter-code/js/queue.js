let queue = new QueueDataStructure ()
let queueDOM = document.querySelector(".queue");
let addBtn = document.getElementById("add").addEventListener("click", addItem);
let takeBtn = document.getElementById("take").addEventListener("click", takeItem);
let valueQueue = "";
let valueSQueueList= "";




printList();

function printList() {
   queueItem = "";

    for (let i=0; i<queue.MAX_SIZE; i++){
        queueItem = document.createElement("li");
        queueItem.classList.add ("empty")
        queueDOM.appendChild(queueItem);
    }
}

function addItem(){
    if (queue.canPush()){
        valueQueue = document.querySelector(".input-lg").value; //Lo que escribes para añadir
        valueQueueList = document.querySelectorAll(".empty");
        valueQueueList[valueQueueList.length-1].innerHTML = valueQueue;
        valueQueueList[valueQueueList.length-1].classList.remove("empty");
        valueQueueList[valueQueueList.length-1].classList.add("full");
        queue.push(valueQueue);
    } else {
        alert (`Estoy hasta los huevos`)
    }
}

function takeItem(){
    if (queue.isEmpty()){ 
        alert (`Estoy fundioooooooooo`)
    } else {
        valueQueueList = document.querySelectorAll(".full");
        valueQueueList[valueQueueList.length-1].innerHTML = "";
        valueQueueList[valueQueueList.length-1].classList.remove("full");
        valueQueueList[valueQueueList.length-1].classList.add("empty");
        queue.shift(valueQueue);
    }
}