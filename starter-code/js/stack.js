
var stack = new StackDataStructure();

$(document).ready(function(){
  var n = 8;
    $(".ad").click(function(){
      $(".abc:nth-child("+n+")").css("background-color" , "blue");
      //stack.push(0);
      n--;
      console.log(stack.push(n));
});

    $(".btn.btn-default.btn-lg.rem").click(function(){
      n++;
      $(".list-group-item:nth-child("+n+")").css("background-color" , "green");
      var respuesta = stack.pop();
      console.log(respuesta);
});
var m = 8;
  $(".ad2").click(function(){
    $(".123:nth-child("+m+")").css("background-color" , "blue");
    m--;
});

  $(".btn.btn-default.btn-lg.rem2").click(function(){
    m++;
    $(".123:nth-child("+m+")").css("background-color" , "green");
});

});


//Revisar todas las clases para un funcionamiento independiente.
//Tipo .ad y .ad2 ---
