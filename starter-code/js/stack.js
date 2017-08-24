//no es lamejor de las formas, ni mucho menos, pero podria funcionar perfectamente


$(document).ready(function(){

    var myStack = new StackDataStructure();
//al clickar
    $('.btn-primary').on('click', function() {
//se activa si puede empujar
      if (myStack.canPush()){
//activo la funcion push de forma que sume un elemento a stackControl
         myStack.push(1);
// como en stackControl tedremos un elemento, aqui conseguiremos asociarlo al blocke de abajo
         var a= '.block-' + myStack.stackControl.length;
         var b= document.getElementById('usr').value;

//cambiamos colores
        $(a).removeClass("grey");
        $(a).addClass("blue");
        $(a).text(b);
// No me da tiempo, pero lo que hay que hacer es sustituir en la posicion "ultimo" del array
// el valor del input por el 1, para que se vea tambien reflejado.
        //var ultimo= myStack.stackControl.length - 1;

      }});



    $('.btn-danger').on('click', function() {

      if (!myStack.isEmpty()){

         var a= '.block-' + myStack.stackControl.length;


        $(a).removeClass("blue");
        $(a).addClass("grey");
// aqui tendria que eliminar el ultimo elemento del array y despues borrar el texto de la parte visible
//document.getElementByClassName(a).innerHTML =" ";


        myStack.stackControl.splice(0,1);


      }});
        });
