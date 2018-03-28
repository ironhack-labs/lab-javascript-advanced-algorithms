var myStack = new StackDataStructure;

console.log("Este es el largo de mi BD: " + myStack.stackControl.length);

$("#add").on("click",function(){   
   var input = $("#input").val(); 
   myStack.push(input);
   $("#pila .pila-vacia").last().addClass("pila-llena").text(input);
   $("#pila .pila-vacia").last().removeClass("pila-vacia");   
  })





  