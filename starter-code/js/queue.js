let queue = new QueueDataStructure();
let queueElement = document.getElementById("queue-input");
let addQueue = document.getElementById("add-queue");
let queues = document.getElementsByClassName("queue-element");
let removeQueue = document.getElementById("delete-queue");

addQueue.addEventListener("click", e => {
  queue.queueControl.push(queueElement.value);
  for (let i = 0; i < queue.queueControl.length; i++) {
    queues[queue.MAX_SIZE - i].innerHTML = queue.queueControl[i];
    queues[queue.MAX_SIZE - i].classList.add("addedelement");
    queueElement.value = "";
  }
});

removeStack.addEventListener("click", e => {
  queue.queueControl.dequeue();
  console.log(queueControl);
});
