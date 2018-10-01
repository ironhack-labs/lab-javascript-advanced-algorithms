var queue = document.querySelector("#queue");
var queueUnshift = document.querySelector("#queueUnshift");
var queuePop = document.querySelector("#queuePop");
var queueDataStructure = new QueueDataStructure();
var und = 0;

queueUnshift.onclick = function() {
  if (queueDataStructure.queueControl.length < 1) {
    queue.removeChild(queue.lastChild);
  }

  if (queueDataStructure.enqueue("a ") !== "Queue Overflow") {
    und = 0;
    var input = document.getElementsByTagName("input")[1];
    var linea = document.createElement("p");
    linea.innerHTML =
      "<p class= 'queueLine textAlign'><span class= 'rotar'>" +
      input.value +
      "</span></p>";
    queue.appendChild(linea);
  } else {
    if (queueDataStructure.queueControl.length === queueDataStructure.MAX_SIZE)
      var linea = document.createElement("p");
    linea.innerHTML =
      "<h4 class= 'overflow queueLine textAlign'><p class='rotar'>Queue Overflow</p></h4>";
    queue.appendChild(linea);
    queueDataStructure.queueControl.push("Queue Overflow");
  }
};

queuePop.onclick = function() {
  if (queueDataStructure.dequeue("a") !== "Queue Underflow") {
    queue.removeChild(queue.lastChild);
  } else {
    if (und === 0) var linea = document.createElement("p");
    linea.innerHTML =
      "<h4 class= 'underflow queueLine textAlign'><p class='rotar'>Queue Underflow</p></h4>";
    queue.appendChild(linea);
    und += 1;
  }
};
