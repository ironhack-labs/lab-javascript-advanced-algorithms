var contador = 8;

$(document).ready(function () {
     var padreLista = $(".inside-lista-stack"); //UL
     var hijo = padreLista.children(); //HTML de li
     var input = $(".valor-stack"); //Valor del input


     $(".sacar-stack").click(function () {
          $(hijo[8]).removeClass("red"); //Operaciones que debes realizar en cada operacion para eliminar los colores de los elementos stack overflow y underflow
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text(""); //Si se muestra stack overflow y despues se hace un take para sacar un elemento, esta operacion elimina el texto de la novena casilla
          if (contador >= 8) { //Si la lista esta vacia
               $(hijo[8]).text("STACK   UNDERFLOW"); //Mostramos stack underflow en rojo
               $(hijo[8]).removeClass("blue")
               $(hijo[8]).addClass("red")
               contador = 8; //Lista vacia
          } else { //Si no
               $(hijo[contador + 1]).text(" "); //Como el contador apunta al hueco vacio en el que va el proximo elemento, eliminamos el elemento con posicion contador+1(Ultimo elemento añadido)
               $(hijo[contador + 1]).removeClass("blue")
               contador++;
          }
     })


     $(".meter-stack").click(function () {
          $(hijo[8]).removeClass("red"); //Operaciones que debes realizar en cada operacion para eliminar los colores de los elementos stack overflow y underflow
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text(""); //Si se muestra stack overflow y despues se hace un take para sacar un elemento, esta operacion elimina el texto de la novena casilla
          var value = input.val();
          if (value == "" && $(hijo[8]).hasClass("blue")) {
               //Si no se ha introducido un valor pero ya hay al menos uno en la primera posicion no se hace nada
          } else if (value == "") { //Esto se ejecuta si se ha pulsado el add sin u imput y previamente esta vacio o contiene stack underflow
               $(hijo[8]).text(""); //Para eliminar el texto de stack underflow en caso de que estuviese
          } else if (contador < 1) { //Si esta lleno
               $(hijo[0]).text("STACK   OVERFLOW"); //Mostramos stack overflow en rojo
               $(hijo[0]).addClass("red");
               for (i = 1; i < 9; i++) { //Vaciamos la lista
                    $(hijo[i]).text("");
                    $(hijo[i]).removeClass("blue");
               }
               contador = 8; //Reiniciamos contador de elementos
          } else { //Si no
               input.text(" ");
               $(hijo[contador]).text(value); //Introducimos el valor, coloreamos la casilla y actualizamos el contador
               $(hijo[contador]).addClass("blue");
               input.val("");
               contador--;
          }
     })
});