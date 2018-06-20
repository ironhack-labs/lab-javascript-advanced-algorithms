var contadorPrimero = 8;
var contadorUltimo = 8;
var contadorElementos = 0;
$(document).ready(function () {
     var padreLista = $(".inside-lista-queue");
     var hijo = padreLista.children();
     var input = $(".valor-queue");
     $(".sacar-queue").click(function () {
          $(hijo[8]).removeClass("red");
          $(hijo[0]).removeClass("red");
          $(hijo[8]).text("");
          $(hijo[0]).text("");
          if (contadorElementos <= 0) {
               $(hijo[8]).text("STACK   UNDERFLOW");
               $(hijo[8]).addClass("red")
          } else {
               $(hijo[contadorPrimero]).text(" ");
               contadorUltimo++;
               for (i = 0; i < 7; i++) {
                    if (i == 6) {
                         $(hijo[contadorPrimero]).text($(hijo[contadorPrimero - 1]).text());
                         $(hijo[contadorPrimero - 1]).text("")
                         $(hijo[contadorPrimero - 1]).removeClass("blue")
                    } else {
                         $(hijo[contadorPrimero]).text($(hijo[contadorPrimero - 1]).text());
                         $(hijo[contadorUltimo]).removeClass("blue")
                         contadorPrimero--;
                    }
               }
               contadorElementos--;
               contadorPrimero = 8;
          }
     })

     $(".meter-queue").click(function () {
          $(hijo[8]).removeClass("red");
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text("");
          var value = input.val();
          if (value == "") {
               return false;
          }
          if (contadorElementos > 7) {
               $(hijo[0]).text("STACK   OVERFLOW");
               $(hijo[0]).addClass("red")
               for (i = 1; i < 9; i++) {
                    $(hijo[i]).text("");
                    $(hijo[i]).removeClass("blue")
               }
               contadorElementos = 0;
               contadorPrimero = 8;
               contadorUltimo = 8;
          } else {
               $(hijo[0]).text("");
               $(hijo[contadorUltimo]).text(value);
               $(hijo[contadorUltimo]).addClass("blue");
               input.val("");
               contadorUltimo--;
               contadorElementos++;
          }
     })
});