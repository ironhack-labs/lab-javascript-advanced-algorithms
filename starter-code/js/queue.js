var queue = new QueueDataStructure();
var inputQ = document.getElementById("input-queue");
var enqueue = document.getElementById("enqueue");
var dequeue = document.getElementById("dequeue");

enqueue.onclick = function() {
  //can push
  if (queue.canEnqueue()) {
    queue.enqueue(inputQ.value);
    console.log(inputQ.value);

    var freeQ = document.getElementsByClassName("freeQ");
    freeQ[0].innerText = inputQ.value;
    freeQ[0].classList.add("busyQ");
    freeQ[0].classList.add("blu-back");

    freeQ[0].classList.remove("freeQ");
  } else {
    var queueOverflow = document.getElementsByClassName("col")[9];
    queueOverflow.classList.remove("hide");
  }
};

dequeue.onclick = function() {
  if (!queue.isEmpty()) {
    queue.dequeue();

    var busyQ = document.getElementsByClassName("busyQ")[
      document.getElementsByClassName("busyQ").length - 1
    ];

    busyQ.innerText = "";
    busyQ.classList.add("freeQ");
    busyQ.classList.remove("blu-back");
    busyQ.classList.remove("busyQ");
  } else {
    var queueUnderflow = document.getElementsByClassName("col")[0];
    queueUnderflow.classList.remove("hide");
  }
};
