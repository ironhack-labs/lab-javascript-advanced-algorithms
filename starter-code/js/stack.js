$(document).ready(function(){
var stack = new StackDataStructure();
  // ante evento de click en añadir
    $('#add-stack').on('click',function(){
        // añadir elemento a la pila
       var element = $('#stackelement').prop("value");
        // si el array esta vacio guardo la primera
        if (stack.isEmpty()){
           stack.push(element);
           $('.stack-element:last').addClass("addedelement");
           $('.stack-element:last').text(element);
         // si esta lleno doy error de OverFlow
        }else if (!stack.canPush()){
            $('.error-stack:first').css("display","block");
            setTimeout(function () {
                $('.error-stack:first').css("display","none");
              }, 250);
        }else { // si no esta lleno sigo metiendo valores en mi pila
            stack.push(element);
            console.log(stack.stackControl);
            $('.stack-element:not(.addedelement):last').text(element);
            $('.stack-element:not(.addedelement):last').addClass("addedelement");  
        }
    });
    // quitar elemento a la pila
    $('#delete-stack').on('click',function(){
        // si esta vacio doy error de underflow
        if (stack.isEmpty()){
            $('.error-stack:last').css("display","block");
            setTimeout(function () {
                $('.error-stack:last').css("display","none");
              }, 250);
        }else {
           // si no lleno la pila
            stack.pop();
            $('.addedelement:first').text('');
            $('.addedelement:first').removeClass("addedelement");  
            console.log(stack.stackControl);
        }
    });

});