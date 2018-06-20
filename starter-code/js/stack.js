var stack=new StackDataStructure();
var contador=8;

$(document).ready(function () {
     var padreLista=$(".inside-lista-stack");
     var hijo=padreLista.children();
     var input=$(".valor-stack");


     $(".sacar-stack").click(function(){
          $(hijo[8]).removeClass("red");
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text("");
          if(contador>=8){
               $(hijo[8]).text("STACK   UNDERFLOW");
               $(hijo[8]).removeClass("blue")
               $(hijo[8]).addClass("red")
               contador=8;
          }
         else{ $(hijo[contador+1]).text(" ");
         $(hijo[contador+1]).removeClass("blue")
          contador++;
     }
     })


     $(".meter-stack").click(function(){
          $(hijo[8]).removeClass("red");
          $(hijo[0]).removeClass("red");
          $(hijo[0]).text("");
          var value=input.val();
          if(value==""){
               return false;
          }
          if(contador<1){
               $(hijo[0]).text("STACK   OVERFLOW");
               $(hijo[0]).addClass("red");
               for(i=1;i<9;i++){
                    $(hijo[i]).text("");
                    $(hijo[i]).removeClass("blue");
               }
               contador=8;
          }
          else{
          input.text(" ");
          $(hijo[contador]).text(value);
          $(hijo[contador]).addClass("blue");
          input.val("");
          contador--;
          }
     })
});