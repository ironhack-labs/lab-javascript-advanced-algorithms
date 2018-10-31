var queue = new QueueDataStructure();
queue.MAX_SIZE = 5;


function createQueue() {
 
  var html = "";
  var index = 0;
  for (var i = 0; i < queue.MAX_SIZE; i++) {
    index = i;
    html += '<div class="element-queue" id="queue' + index + '"></div>\n';
  }
  $("#dataStructure-Queue").html(html);
}

function addToQueue() {
  var elementToAdd = document.getElementById("input-Data-Queue").value;
  var elementAdded = queue.enqueue(elementToAdd);

  if (elementAdded === "Queue Overflow") {
    document.getElementsByClassName("error-overFlow")[1].style.visibility = "visible";

  } else {
    var index_default = 0;
    queue.queueControl.forEach(function(elem,index) {
      var div = document.getElementById(`queue${index}`);
      div.className = "element-queue frontElement";
      div.innerText = queue.queueControl[index];
    });
  }
}

function takeToQueue(){

    var contTake = queue.queueControl.length-1;
    var elementAdded = queue.dequeue();

  if (elementAdded === "Queue Underflow") {
    document.getElementsByClassName("error-underFlow")[1].style.visibility = "visible";
  } else {
    var div = document.getElementById(`queue${contTake}`);
    div.className = "element-queue";
    div.innerText = "";
  }
}

window.onload = function() {
    var buttonAddQueue = document.getElementById("button-Add-Queue");
    var buttonTakeQueue = document.getElementById("button-Take-Queue");
    createQueue();
  
    buttonTakeQueue.onclick = takeToQueue;
    buttonAddQueue.onclick = addToQueue;
  

    var buttonAdd = document.getElementById("button-Add");
    var buttonTake = document.getElementById("button-Take");
    createStack();
  
    buttonTake.onclick = takeToStack;
    buttonAdd.onclick = addToStack;
  
    
};
