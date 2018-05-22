$(document).ready (function(){
  //lo primero que tenemos que hacer es un constructor de nuestro Stack, porque lo vamos a estar ocupando en todas las funciones
  var stack = new StackDataStructure();
  //cuando se de un click al botón ADD se va a ejecutar la función 
  $("#addStack").click(function(){
    //.val es el método para sacar el valor de un input
    var element = $("#inputElement").val();
    // var resultado checa si hace el stack oferflow
    // if global para no meter elementos vacíos
    if (element!=""){
        var resultado = stack.push(element);
        // condición... si hay stack overflow .show (agregar al css display block)
        if (resultado=='Stack Overflow'){
          $("#StackOverflow").show();
          console.log(resultado);
          //si no hay stack overflow ocultar
        } else {$("#StackUnderflow").hide();}
        updateStack();
      }
  });

  $("#takeStack").click(function(){
        // var resultado checa si hace el stack underflow
    var resultado = stack.pop();
    // condición... si hay stack overflow .show (agregar al css display block)
    if (resultado=='Stack Underflow'){
      $("#StackUnderflow").show();
      console.log(resultado);
    } else {$("#StackOverflow").hide();}
    updateStack();
  });

  function updateStack(){
    //borrar lo que tiene el stack para empezar desde 0
    $(".element").removeClass("blue");
    //entra al elemento html para borrar el texto que tiene adentro
    $(".element").html("");


    //iterar sobre el arreglo
    for (i=0;i<stack.stackControl.length;i++){
      //contador id del div + el i para recorra del 0 al 7, .html cambia el contenido del div
      $("#num"+i).html(stack.stackControl[i]);
      console.log("#num"+i);
      //agregar clase para fondo azul
      $("#num"+i).addClass("blue");
    } 
  }
});