$(document).ready(function() {
  //Fijar variables de contexto
  let overflowFlag = false;
  let underflowFlag = false;
  //Crear objeto contenedor
  let myQueue = new QueueDataStructure();
  //Llenar stack de cajas grises
  for (let i = 0; i < myQueue.MAX_SIZE; i++) {
    var greyBox = document.createElement("div");
    greyBox.setAttribute("class", "vbox--grey");
    $(".vbox-container").append(greyBox);
  }

  //Enqueue
  $(".queue-container .btn-add").click(function() {
    myInput = $(".queue-container input").val();
    if (myInput.length > 0 && myQueue.canEnqueue()) {
      updateContainer(myQueue.enqueue(myInput));
      underflowFlag = false;
    }
    else if (!(myQueue.canEnqueue()) && !overflowFlag) {
      let queueOverflowBox = document.createElement("div");
      queueOverflowBox.setAttribute("class", "vbox--warning");
      queueOverflowBox.textContent = "Queue Overflow";
      $(".vbox-container").append(queueOverflowBox);
      overflowFlag = true;
    }
  });
  //Dequeue
  $(".queue-container .btn-take").click(function() {
    if (!(myQueue.isEmpty())) {
      myQueue.dequeue();
      updateContainer(myQueue.queueControl);
      overflowFlag = false;
    }
    else if (!underflowFlag){
      let queueUnderflowBox = document.createElement("div");
      queueUnderflowBox.setAttribute("class", "vbox--warning");
      queueUnderflowBox.textContent = "Queue Underflow";
      $(".vbox-container").prepend(queueUnderflowBox);
      underflowFlag = true;
    }
  });

  //Update boxes
  function updateContainer(array) {
    $(".vbox-container").empty();
    for (let i = 0; i  < myQueue.MAX_SIZE; i++) {
      let box = document.createElement("div");
      if (array[i] === undefined) { //Pinta en gris si no hay nada
        box.setAttribute("class", "vbox--grey");
      }
      else { //Mete el valor y cambia la clase de la cajita para que tenga estilo chidos
        box.setAttribute("class", "vbox--full");
        box.textContent = array[i];
      }
      $(".vbox-container").append(box);
    }
  }
});