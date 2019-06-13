let queueLogic = new StackDataStructure();
let addQueueBtn = document.getElementById("add-queue-item");
let takeQueueBtn = document.getElementById("take-queue-item");
let queueUl = document.getElementById("queue");


addQueueBtn.onclick = e => {
  e.preventDefault();
  // addToStack(stackLogic);
};
takeQueueBtn.onclick = e => {
  e.preventDefault();
  // takeFromStack(stackLogic);
};