const queue = new QueueDataStructure();

//queue.render();
render(queue, "queue-list");

const queueElement = document.querySelector("#queue input");

document.querySelector("#queue .btn-add").onclick = () => {
  queue.enqueue(queueElement.value);
  queue.render();
};

document.querySelector("#queue .btn-remove").onclick = () => {
  queue.dequeue();
  queue.render();
};

function render(data, target) {
  const list = document.getElementById(target);
  list.innerHTML = "";
  if (data.isEmpty()) {
  }

  for (let i = 1; i <= data.MAX_SIZE; i++) {
    const queueListElement = document.createElement("li");
    queueListElement.textContent = data.queueControl[data.MAX_SIZE - i];
    list.appendChild(queueListElement);
  }

  if (!data.canEnqueue()) {
    const queueListElement = document.createElement("li");
    queueListElement.textContent = "Queue Overflow";
    queueListElement.classList.add("queue-overflow");
    list.insertBefore(queueListElement, list.children[0]);
  }
}
