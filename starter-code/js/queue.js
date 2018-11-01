var queue = new QueueDataStructure;
 createQueueElements();
 function createQueueElements(){
  $(".queue .element").remove();
  var element;
  for (var i = queue.MAX_SIZE - 1; i >= 0 ; i--){
    element = document.createElement('div');
    element.classList.add("element");
    if (i < queue.queueControl.length){
      element.innerText = queue.queueControl[i];
    }
     $(".cola").append(element);  
  }
}

 $(".btnadd.btnqueue").click(function(e){
    var result = queue.enqueue($(".inputqueue").val());
  
    if (result === "Queue Overflow"){
      alert("Queue Overflow");
    }
    createQueueElements();
});

 $(".btntake.btnqueue").click(function(e){
  var result = queue.dequeue();
   if (result === "Queue Underflow"){
    alert("Queue Underflow");
  }
  createQueueElements();
});

$(".btnadd.btnqueue").click(function(){
    $('input[type="text"]').val("");
});