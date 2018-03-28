var myQueue = new QueueDataStructure;

$("#sup").on("click",function(){  
  var input = $("#input").val();
  $("#pila .pila-llena").first().addClass("pila-vacia");
  $("#pila .pila-llena").first().removeClass("pila-llena"); 
  $("#pila .pila-llena").first().text("");   
 })
 var input = $("#input").val(); 
 myStack.push(input);