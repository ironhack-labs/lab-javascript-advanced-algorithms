$(function(){
  var pila = new StackDataStructure;
  pila.size=8;
  var pilaHtml="";


  for(i=0;i<pila.size;i++){
      pilaHtml+= '<div class="pila-element"></div> \n'
  }


  $('.pila.container').html(pilaHtml);

  pila.printStack();
  


  $('.pila.agregar').on("click",function(){
      pila.push($('.pila.input').prop("value"));
      pila.printStack();
  });



  $('.pila.quitar').on("click",function(){
      pila.pop();
      pila.printStack();
  });
})