var queue = new QueueDataStructure(size);
var $queue = document.getElementById("queue");
var $queueElements;
var $queueAdd = document.getElementById("queue-add");
var $queueTake = document.getElementById("queue-take");
var $queueInput = document.getElementById("queue-input");
var $elQueueTake = document.getElementById("el-queue-take");
for (var i = -1; i <= queue.MAX_SIZE; i++) {
  $queue.appendChild(document.createElement("li"));
}

$queueElements = $queue.getElementsByTagName("li");
$queueTake.onclick = function() {
  var i = 0;
  var element = queue.dequeue();
  if (element != "Queue Underflow") {
    $queueElements[0].innerHTML = "";
    $queueElements[0].className = "";
    i = queue.MAX_SIZE - queue.queueControl.length;

    $queueElements[i].innerHTML = "";
    $queueElements[i].className = "";
    console.log($elQueueTake, element);
    $elQueueTake.innerHTML = element;
  } else {
    $queueElements[queue.MAX_SIZE + 1].innerHTML = "Queue Underflow";
    $queueElements[queue.MAX_SIZE + 1].className = "underflow";
    // "Queue Underflow"
  }
};
$queueAdd.onclick = function() {
  $queueInput.focus()
  if($queueInput.value==""){
      alert("no puede añadir un elemento vacio")
  
    return
  }
  var i = 0;
  if (queue.enqueue($queueInput.value) != "Queue Overflow") {
    i = queue.MAX_SIZE;
    $elQueueTake.innerHTML = "";
    $element=$queueElements[1];
    $element.innerHTML = $queueInput.value;
    $element.className = "lleno";
    $element.parentNode.appendChild($element);
    $element.parentNode.appendChild($element.previousSibling);
    $queueElements[queue.MAX_SIZE + 1].innerHTML = "";
    $queueElements[queue.MAX_SIZE + 1].className = "";
    $queueInput.value = "";
  } else {
    $queueElements[0].innerHTML = "Queue Overflow";
    $queueElements[0].className = "overflow";
  }
  $elQueueTake.focus()
};
