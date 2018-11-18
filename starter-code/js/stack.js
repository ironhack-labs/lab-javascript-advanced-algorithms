$(document).ready(function() {
  //Fijar variables de contexto
  let overflowFlag = false;
  let underflowFlag = false;
  //Crear objeto contenedor
  let myStack = new StackDataStructure();
  //Llenar stack de cajas grises
  for (let i = 0; i < myStack.MAX_SIZE; i++) {
    let greyBox = document.createElement("div");
    greyBox.setAttribute("class", "hbox--grey");
    $(".hbox-container").append(greyBox);
  }

  //Vincular botones con métodos y dirigir I/O
  $(".stack-container .btn-add").click(function() {
    myInput = $(".stack-container input").val();
    if (myInput.length > 0 && myStack.canPush()) {
      updateContainer(myStack.push(myInput));
      underflowFlag = false;
    }
    else if (!(myStack.canPush()) && !overflowFlag) {
      let stackOverflowBox = document.createElement("div");
      stackOverflowBox.setAttribute("class", "hbox--warning");
      stackOverflowBox.textContent = "Stack Overflow";
      $(".hbox-container").prepend(stackOverflowBox);
      overflowFlag = true;
    }
  });

  $(".stack-container .btn-take").click(function() {
    if (!(myStack.isEmpty())) {
      myStack.pop();
      updateContainer(myStack.stackControl);
      overflowFlag = false;
    }
    else if (!underflowFlag){
      let stackUnderflowBox = document.createElement("div");
      stackUnderflowBox.setAttribute("class", "hbox--warning");
      stackUnderflowBox.textContent = "Stack Underflow";
      $(".hbox-container").append(stackUnderflowBox);
      underflowFlag = true;
    }
  });
  
  //Update boxes
  function updateContainer(array) {
    $(".hbox-container").empty();
    for (let i = myStack.MAX_SIZE - 1; i >= 0; i--) {
      let box = document.createElement("div");
      if (array[i] === undefined) { //Pinta en gris si no hay nada
        box.setAttribute("class", "hbox--grey");
      }
      else { //Mete el valor y cambia la clase de la cajita para que tenga estilo chidos
        box.setAttribute("class", "hbox--full");
        box.textContent = array[i];
      }
      $(".hbox-container").append(box);
    }
  }
});
