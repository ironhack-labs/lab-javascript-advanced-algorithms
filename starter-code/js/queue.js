var cola = new QueueDataStructure();

$(document).ready(function() {
  inicializarCola();
  $(".enqueue").on("click", function() {
    debugger
    var valor = $(".queue input").val();
    anadirElementoCola(valor);
  });

  $(".dequeue").on("click", function() {
    borrarElementoCola();
  });
});

function anadirElementoCola(elemento) {
  if (cola.enqueue(elemento) != "Queue Overflow") {
    
    $(".cola > .empty:first")
      .addClass("full")
      .removeClass("empty")
      .html(elemento);
      $(".queue> .final-alert").html("");
  } else {
    $(".cola > .empty:first")
      .addClass("full")
      .removeClass("empty")
      .html(elemento);

    $(".queue>.final-alert").html("La cola está llena");
  }


}

function borrarElementoCola() {
  debugger;
  if (cola.dequeue() != "Queue Underflow") {
    $(".cola > .full:last")
      .addClass("empty")
      .removeClass("full")
      .html("");
      $(".queue>.final-alert").html("");
  } else {
    $(".cola > .full:last")
      .addClass("empty")
      .removeClass("full")
      .html("");
    $(".queue >.final-alert").html("La cola ya está vacía!!.");
  }
 
}
function inicializarCola() {
  var cuantos = cola.MAX_SIZE;

  for (var i = 0; i < cuantos; i++) {
    $(".cola").append("<div class='empty'> </div>");
  }
}
