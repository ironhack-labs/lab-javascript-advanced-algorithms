const queueInput = document.getElementById("input-queue");
const queueAdd = document.getElementById("btn-add-to-queue");
const queueTake = document.getElementById("btn-take-from-queue");
const queueItems = document.getElementById("queue-items");
const queue = new QueueDataStructure();

queueAdd.addEventListener("click", () => {
  if (queueInput.value === "") {
    console.log("no value to add");
    focusInput("input-queue");
  } else {
    queue.enqueue(queueInput.value);
    createChildAndAppendChildToParent("div", queueItems, queueInput.value);
  }
  queueInput.value = "";
  focusInput("input-queue");
});

queueTake.addEventListener("click", () => {
  queue.dequeue();
  removeLastChildFromParent(queueItems, "queue");
  focusInput("input-queue");
});
