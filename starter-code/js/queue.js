var queueDOM                 = $(".queue-container");



var queue= new QueueDataStructure();

drawQueue();

function drawQueue(){
  $(".queue .element").remove();
  var queueArray=queue.queueControl;
  var maxSize= queue.MAX_SIZE;
  var queueLength= queueArray.length;
  var element;
  for (var i=maxSize-1;i>=0;i--){
    element=document.createElement('div');
    element.classList.add("element");
    if (i<queueLength){
      element.innerText=queueArray[i];
      element.classList.add("filled");
    }
     queueDOM.append(element);  
  }
  
}


$(".btn-add.btn-queue").click(function(e){
    var result= queue.enqueue($(".queue-input").val());
  
    if (result==="Queue Overflow"){
      alert("QUEUE OVERFLOW");
    }
    drawQueue();
});


$(".btn-take.btn-queue").click(function(e){
  var result= queue.dequeue();

  if (result==="Queue Underflow"){
    alert("queue UNDERFLOW");
  }
  drawQueue();
});