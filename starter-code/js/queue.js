var queue = new QueueDataStructure();


$('#add').on('click', function () {
  queue.enqueue($(".input").val())
   $(".añadir:first").text($(".input").val())
   $(".añadir:first").removeClass("añadir").addClass("color")
   if(!queue.isEmpty()){
    $("#under").removeClass("visible").addClass("ocultar")
   }
   if(!queue.canEnqueue()){
    $("#over").removeClass("ocultar").addClass("visible")
   }
 })
 

 $('#take').on('click',function(){
  queue.dequeue($(".input").val())
    $(".fila .color:last").text("")
    $(".fila .color:last").removeClass("color").addClass("añadir")
    if(queue.isEmpty()){
      $("#under").removeClass("ocultar").addClass("visible")
    }else{
      $("#over").removeClass("visible").addClass("ocultar")
    }
 })


