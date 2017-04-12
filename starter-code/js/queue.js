var queue;

function addQueue(){
  var item = document.getElementById('text2Add2Queue').value;
  if (queue.enqueue(item) === "Queue Overflow") {
    alert("Queue Overflow");
  } else {
    printQueue();
  }
}

function takeQueue(){
  if (queue.dequeue() === "Queue Underflow") {
    alert("Queue Underflow");
  } else {
    printQueue();
  }
}

function printQueue(){
  var queueDataStructure = document.getElementById('queueDataStructure');
  queueDataStructure.innerHTML = "";
  items = queue.queueControl.length;

  for (var i = 0; i<items;i++){
    queueDataStructure.innerHTML += "<div class='item'>"+ queue.queueControl[i] +"</div>";
  }

  for (var j = 0; j < (10-items);j++) {
    queueDataStructure.innerHTML += "<div class='empty'></div>";
  }
}
