$(document).ready(function () {

    var stack = new StackDataStructure();

    $('.botonadd').click(function () {
        
     var inputValue = $('.input').val()
        
     stack.stackControl.push(inputValue);
/*      $(".porcentaje").last().text(inputValue);
 */     var posicion = stack.stackControl.length;
        
     $(".escalones div:nth-child("+ posicion +")")[0].style.background="green"
     $(".escalones div:nth-child("+ posicion +")")[0].innerHTML=inputValue;

     
    if (!stack.canPush()){
        window.alert("killo Ni unas mas que explota");
    }     

     //remove class add class
        //utilizar los metodos que he hecho antes
        //last de el id escalones me coge el ultimo div
    })

    $('.botonremove').click(function(){

    var posicion = stack.stackControl.length;
    stack.stackControl.pop()
    $(".escalones div:nth-child("+posicion+")")[0].style.background="grey"
    $(".escalones div:nth-child("+posicion+")")[0].innerHTML=""

    })





})