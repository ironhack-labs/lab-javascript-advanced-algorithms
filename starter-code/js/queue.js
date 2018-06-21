var contadorPrimero = 8; //Variable que apunta al primer elemento
var contadorUltimo = 8; //Variable que apunta al ultimo elemento
var contadorElementos = 0; //Numero de elementos en la lista
$(document).ready(function () {
     var padreLista = $(".inside-lista-queue"); //UL
     var hijo = padreLista.children(); //conjunto html de li
     var input = $(".valor-queue"); //Valor introducido
     $(".sacar-queue").click(function () { //Si clickamos en take
          $(hijo[8]).removeClass("red"); //Operaciones que debes realizar en cada operacion para eliminar los colores de los elementos stack overflow y underflow
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text(""); //Si se muestra stack overflow y despues se hace un take para sacar un elemento, esta operacion elimina el texto de la novena casilla
          if (contadorElementos <= 0) { //Si la lista esta vacia 
               $(hijo[8]).text("STACK   UNDERFLOW");
               $(hijo[8]).addClass("red")
          } else { //Si no
               $(hijo[contadorPrimero]).text(" "); //Se elimina el primer elemento (FIFO)
               contadorUltimo++; //El puntero al ultimo elemento avanza ya que la lista se va a contraer
               for (i = 0; i < 7; i++) { //Bucle que hace avanzar una posicion a cada elemento de la lista
                    if (i == 6) { //En caso de ser el ultimo elemento, debemos eliminar el azul de su casilla
                         $(hijo[contadorPrimero]).text($(hijo[contadorPrimero - 1]).text());
                         $(hijo[contadorPrimero - 1]).text("")
                         $(hijo[contadorPrimero - 1]).removeClass("blue")
                    } else {
                         $(hijo[contadorPrimero]).text($(hijo[contadorPrimero - 1]).text());
                         $(hijo[contadorUltimo]).removeClass("blue")
                    }
               }
               contadorElementos--; //Elementos totales -1
               contadorPrimero = 8; //Posicionamos otra vez el primero
          }
     })

     $(".meter-queue").click(function () {
          $(hijo[8]).removeClass("red"); //Operaciones que debes realizar en cada operacion para eliminar los colores de los elementos stack overflow y underflow
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text(""); //Si se muestra stack overflow y despues se hace un add para sacar un elemento, esta operacion elimina el texto de la novena casilla
          var value = input.val(); //Valor del input
          if (value == "" && $(hijo[8]).hasClass("blue")) { //Si se clicka en add sin haber introducido texto   pero ya hay algo en la primera posicion

          } else if (value == "") {
               $(hijo[8]).text(""); //Esto se hace por si se ha producido previamente stack underflow, de esta forma se elimina el texto del primer elemento
          } else if (contadorElementos > 7) { //Si se ha llegado al maximo de elementos
               $(hijo[0]).text("STACK   OVERFLOW");
               $(hijo[0]).addClass("red")
               for (i = 1; i < 9; i++) { //Para vaciar el array
                    $(hijo[i]).text("");
                    $(hijo[i]).removeClass("blue")
               }
               contadorElementos = 0; //Reseteamos los valores ya que se ha vaciado el array
               contadorPrimero = 8;
               contadorUltimo = 8;
          } else {
               $(hijo[0]).text(""); //Si no
               $(hijo[contadorUltimo]).text(value);
               $(hijo[contadorUltimo]).addClass("blue");
               input.val("");
               contadorUltimo--; //Actualizamos la ultima posicion 
               contadorElementos++; // Elementos + 1
          }
     })
});