var stackData = new StackDataStructure();
  stackData.MAX_SIZE = 8;
$( document ).ready(function() {
  console.log("ddd")
  


  $(".lleno").hide();
  $(".vacio").hide();

$(".btn-add").on("click", function () {
  var texto =  $(".entrada").val();
  stackData.push(texto);
   
  if (stackData.stackControl.length == 8) {
    $(".lleno").show();
    $(".lleno").addClass("overflow");
  }
  else if (stackData.stackControl.length == 0) {
    $(".vacio").addClass("underflow");
  }
  var index = stackData.MAX_SIZE - stackData.stackControl.length;
  $(".pila").eq(index).removeClass("pila-vacia");
  $(".pila").eq(index).addClass("pila-llena");
  $(".pila").eq(index).text(texto);



});

$(".btn-take").on("click", function () {
  if (stackData.stackControl.length == 0) {
    $(".vacio").addClass("underflow");
    $(".vacio").show();
  }
 
  var index = stackData.MAX_SIZE - stackData.stackControl.length;
  var texto =  $(".entrada").eq(index).val();
  stackData.pop(texto);
  
  $(".pila").eq(index).removeClass("pila-llena");
  $(".pila").eq(index).addClass("pila-vacia");
  $(".pila").eq(index).text("");



});
  
});