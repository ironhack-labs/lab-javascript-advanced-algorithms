var stackData = new StackDataStructure();
  stackData.MAX_SIZE = 8;
$( document ).ready(function() {
  


  
  $(".lleno").hide();
  $(".vacio").hide();

  $(".btn-add").on("click", function () {
    if ($(".vacio").css("visibility") == "visible") { //alguna otra forma de hacer esto???
      $(".vacio").hide();
    } 
    var texto =  $(".entrada").val();
    if (stackData.stackControl.length == 8) { 
      $(".lleno").show();
    }
    stackData.push(texto);
    
    
    
  
  var index = stackData.MAX_SIZE - stackData.stackControl.length;
  $(".pila").eq(index).removeClass("pila-vacia");
  $(".pila").eq(index).addClass("pila-llena");
  $(".pila").eq(index).text(texto);
});

$(".btn-take").on("click", function () {
  if ($(".lleno").css("visibility") == "visible") {
    $(".lleno").hide();
  }
  if (stackData.stackControl.length == 0) {
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