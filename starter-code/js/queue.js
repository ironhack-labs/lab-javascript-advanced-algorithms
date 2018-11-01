var queueStructure = new QueueDataStructure();

queueStructure.MAX_SIZE = 10;

const containerQueue = document.querySelector(".queue");

// Create Div of queue Size

for (var i = 0; i < queueStructure.MAX_SIZE; i++) {
    element = document.createElement("div");
    element.setAttribute("class", "queue-element");
    containerQueue.append(element);
  }

  function printQueue(queueFunction, action) {
    if (action === "enqueue") {
      if (queueFunction === "Queue Overflow") {
        document.querySelectorAll(".queue-element")[queueStructure.MAX_SIZE - 1].innerHTML = "QO";
        document.querySelectorAll(".queue-element")[queueStructure.MAX_SIZE - 1].classList.add("queue-overflow");
        document.querySelectorAll(".queue-element")[queueStructure.MAX_SIZE - 1].classList.remove("filled");
      } else {
        queueFunction.forEach(function(value, i) { 
        console.log(document.querySelectorAll(".queue-element")[i]);
        document.querySelectorAll(".queue-element")[i].innerHTML = `${value}`;
        document.querySelectorAll(".queue-element")[i].classList.add("filled");
        document.querySelectorAll(".queue-element")[i].classList.remove("queue-underflow");
        });
      }
    } else {
      if (queueFunction === "Queue Underflow") {
        document.querySelectorAll(".queue-element")[0].innerHTML = "QU";
        document.querySelectorAll(".queue-element")[0].classList.add("queue-underflow");
        document.querySelectorAll(".queue-element")[0].classList.remove("filled");
      } else {
        document.querySelectorAll(".queue-element")[queueStructure.queueControl.length].innerHTML = "";
        document.querySelectorAll(".queue-element")[queueStructure.queueControl.length].classList.remove("filled");
        document.querySelectorAll(".queue-element")[queueStructure.queueControl.length].classList.remove("queue-overflow");
      }
    }
  }

  document.querySelector("#addQueue").onclick = function() {
    if (document.querySelector("#inputQueue").value === '') {
        printQueue(queueStructure.enqueue(1),"enqueue");
    } else {
        printQueue(queueStructure.enqueue(document.querySelector("#inputQueue").value),"enqueue");
    }
    
    document.querySelector("#inputStack").value = "";
  };
  

document.querySelector("#takeQueue").onclick = function() {
    printQueue(queueStructure.dequeue(), "dequeue");
};