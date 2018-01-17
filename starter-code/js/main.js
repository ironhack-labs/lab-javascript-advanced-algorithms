$(document).ready(function(){


  var stack = new StackDataStructure();

  function pintaElementoPila(pos,contenido,color){

    var elemento = $("[pos*="+pos+"]");
    elemento.children().html(contenido);
    elemento.css('background-color',color);

  };


  $('.btn-info').on('click', function () {
  
      var texto = $("input").val();
      var pila = stack.push(texto);
      if(typeof(pila)!=="string"){
        pintaElementoPila(stack.stackControl.length-1,texto,'#19FFFF');

      }else{
        //console.log(pila);
        pintaElementoPila(8,pila,'red');
        
      }
      $("input").val("");

    
  });

  $('.btn-danger').on('click', function () {



      var pila = stack.pop();
      console.log(pila);
      if(pila==="Stack Underflow"){
        pintaElementoPila(8,pila,'red');

      }else{
        //console.log(stack.stackControl.length-1);
        pintaElementoPila(stack.stackControl.length,"",'#FFF');

      }

  });

  
});

