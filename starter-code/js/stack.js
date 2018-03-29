var pila = new StackDataStructure();

$(document).ready(function() {
  inicializarPila()
  $(".push").on("click", function() {
    var valor = $(".stack input").val();
    anadirElemento(valor);
  });

  $(".pop").on("click", function() {
    borrarElemento();
  });
});

function anadirElemento(elemento) {
  if (pila.push(elemento) != "Stack Overflow") {
    $(".pila > .empty:last")
      .addClass("full")
      .removeClass("empty")
      .html(elemento);
      $(".stack > .final-alert").html("");
  } else {
    $(".pila > .empty:last")
      .addClass("full")
      .removeClass("empty")
      .html(elemento);

    $(".stack > .final-alert").html("La pila está llena");
  }

}

function borrarElemento() {
  if (pila.pop() != "Stack Underflow") {
    $(".pila > .full:first")
      .addClass("empty")
      .removeClass("full")
      .html("");
      $(".stack > .final-alert").html("");
  } else {
    $(".pila > .full:first")
      .addClass("empty")
      .removeClass("full")
      .html("");
    $(".stack > .final-alert").html("La pila ya está vacía!!.");
  }
  
}
function inicializarPila() {
  var cuantos = pila.MAX_SIZE;
  for (var i = 0; i < cuantos; i++) {
    $(".pila").append("<div class='empty'> </div>");
  }
}
