var pila = new StackDataStructure();

$(document).ready(function() {
  inicializarPila();

  $(".push").on("click", function() {
    var input = $(".stack input").val();
    addElemento(input);
  });

  $(".pop").on("click", function() {
    borrarElemento();
  });
});

function inicializarPila() {
  var numMax = pila.MAX_SIZE;
  for (var i = 1; i < numMax; i++) {
    $(".pila").append(
      "<p><div class='empty btn btn-primary btn-lg'> </div></p>"
    );
  }
}

function addElemento(elemento) {
  if (pila.push(elemento) != "Stack Overflow") {
    $(".pila > .empty:last")
      .addClass("full")
      .removeClass("empty")
      .html(elemento);

    $(".stack > .final")
      .hide()
      .text("");
    $(".texto tr").append("<p>" + elemento + "</p>");
  } else {
    $(".pila > .empty:last")
      .addClass("full")
      .removeClass("empty")
      .html(elemento);

    $(".stack > .final")
      .show()
      .text("La pila está llena");
  }
}

function borrarElemento() {
  if (pila.pop() != "Stack Underflow") {
    $(".pila > .full:first")
      .addClass("empty")
      .removeClass("full")
      .html("");
    $(".stack > .final")
      .hide()
      .text("");
    $(".texto p:last-child").remove();
  } else {
    $(".pila > .full:first")
      .addClass("empty")
      .removeClass("full")
      .html("");

    $(".stack > .final")
      .show()
      .text("La pila está vacía");
  }
}
