$(function(){
  var fila = new QueueDataStructure;
  fila.size=8;
  var filaHtml = "";


  for(i=0;i<fila.size;i++){
      filaHtml += '<div class="fila-element"></div> \n';
  }   


  $('.fila.container').html(filaHtml);



  fila.printQueue(); 



  $('.fila.agregar').on("click",function(){
      fila.enqueue($('.fila.input').prop("value"));
      fila.printQueue();
  });



  $('.fila.quitar').on("click",function(){
      fila.dequeue();
      fila.printQueue();
  });

})