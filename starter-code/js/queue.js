var queue = new QueueDataStructure(size);
var $queue = document.getElementById("queue");
var $queueAdd = document.getElementById("queue-add");
var $queueTake = document.getElementById("queue-take");
var $queueInput = document.getElementById("queue-input");
var $elQueueTake = document.getElementById("el-queue-take");
var $queueElements;

for (var i = -1; i <= queue.MAX_SIZE; i++) {
  $queue.appendChild(document.createElement("li"));
}

$queueElements = $queue.getElementsByTagName("li");

$queueTake.onclick = function() {
  var i = 0;
  var element = queue.dequeue();
  if (element != "Queue Underflow") {
    // Ocultamos el mensaje Queue Overflow
    $queueElements[0].innerHTML = "";
    $queueElements[0].className = "";
    //Vaciamos el primer elemento añadido
    i = queue.MAX_SIZE - queue.queueControl.length;
    $queueElements[i].innerHTML = "";
    $queueElements[i].className = "";
    //Mostramos el elemento eliminado
    $elQueueTake.innerHTML = element;
  } else {
    // "Queue Underflow"
    $queueElements[queue.MAX_SIZE + 1].innerHTML = "Queue Underflow";
    $queueElements[queue.MAX_SIZE + 1].className = "underflow";
  }
};
$queueAdd.onclick = function() {
  var i = 0;
  $queueInput.focus()
  if($queueInput.value==""){
      alert("no puede añadir un elemento vacio")
  
    return
  }
  if (queue.enqueue($queueInput.value) != "Queue Overflow") {
    //Dejamos de ver el ultimo elemento eliminado
    $elQueueTake.innerHTML = "";
    // Quitamos el mensaje Queue Underflow
    $queueElements[queue.MAX_SIZE + 1].innerHTML = "";
    $queueElements[queue.MAX_SIZE + 1].className = "";
    // Añadimos el valor del nuevo elemento en el segundo hueco
    // El primero lo guardamos para el mensaje stack overflow
    i = queue.MAX_SIZE;
    $element=$queueElements[1];
    $element.innerHTML = $queueInput.value;
    $element.className = "lleno";
    // movemos al elemento añadido al final
    $element.parentNode.appendChild($element);
    // Añadimos al penultimo elemento al final
    // Es el mensaje oculto Queue
    $element.parentNode.appendChild($element.previousSibling);
    $queueInput.value = "";
  } else {
    $queueElements[0].innerHTML = "Queue Overflow";
    $queueElements[0].className = "overflow";
  }
  $elQueueTake.focus()
};
