queue = new QueueDataStructure();
function addToQueue() {
  console.log("agregando a la cola q " + size);
  queue.enqueue(1);
  var size = queue.actualSize();
  var element = document.getElementById("q" + size);
  element.className += " full";
}
function removeFromQueue() {
  console.log("removiendo de la cola q" + size);
  var size = queue.actualSize();
  var element = document.getElementById("q" + size);

  queue.dequeue();
  element.className = "qelements empty";
}
