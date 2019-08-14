const queue = new QueueDataStructure({
  queueControl: [],
  MAX_SIZE: 5,
});

const queueInput = document.getElementById("input-queue");
const btnAddQueue = document.querySelector(".addQueue");
const btnRemoveQueue = document.querySelector(".removeQueue");

btnAddQueue.onclick = function (){
   if (queue.canEnqueue()){
    let div = document.createElement("div");
    let container = document.querySelector("section.container2");
    container.appendChild(div);
    div.className = "queue";
    div.classList.add("is-active")
    div.innerHTML = queueInput.value;} 
  else {window.alert("Queue Overflow")};
  queue.enqueue(queueInput.value);
  console.log(queue.queueControl)
}

btnRemoveQueue.onclick = function (){
  if(!queue.isEmpty()){
    let container = document.querySelector("section.container2");
    let div = document.querySelector(".container2 div");
    container.removeChild(div);}
  else {window.alert("Queue Underflow")};
  queue.dequeue()
  console.log(queue.queueControl)
}