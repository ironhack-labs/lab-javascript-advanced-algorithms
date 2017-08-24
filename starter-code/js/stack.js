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
      }});



    $('.btn-danger').on('click', function() {

      if (!myStack.isEmpty()){

         var a= '.block-' + myStack.stackControl.length;


        $(a).removeClass("blue");
        $(a).addClass("grey");

        //document.getElementByClassName(a).innerHTML =" ";


        myStack.stackControl.splice(0,1);


      }});
        });
