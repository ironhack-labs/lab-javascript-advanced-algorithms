var queue = new QueueDataStructure()
queue.MAX_SIZE = 5

var queueDiv = document.getElementById("queue")

var newElement = document.createElement("div")
newElement.setAttribute("class", "element")

for(var i = 0; i < queue.MAX_SIZE; i++){
  queueDiv.innerHTML+= newElement.outerHTML
}

$(".queue-controls .add").click(function(){
  if(queue.canEnqueue() == true){
    queue.enqueue($("#queue-input").val())
    $("#queue .element").eq(queue.MAX_SIZE - queue.queueControl.length).html($("#queue-input").val())
    $("#queue .element").eq(queue.MAX_SIZE - queue.queueControl.length).addClass("has-content")
    $("#queue-input").val("")
    if($("#queue .element").eq(queue.MAX_SIZE - 1).hasClass("overflow")){
      $("#queue .element").eq(queue.MAX_SIZE - 1).removeClass("overflow")
    }
  }else{
    $("#queue .element").eq(0).html("queue Overflow")
    $("#queue .element").eq(0).addClass("overflow")
  }
})

$(".queue-controls .take").click(function(){
  if(queue.isEmpty() == false){
    $("#queue .element").eq(queue.MAX_SIZE - queue.queueControl.length).html("")
    $("#queue .element").eq(queue.MAX_SIZE - queue.queueControl.length).removeClass("has-content")
    queue.dequeue()
    queue.queueControl.forEach(function(element, index){
      $("#queue .element").eq(queue.queueControl.length).html($(element))
    })
    if($("#queue .element").eq(0).hasClass("overflow")){
      $("#queue .element").eq(0).removeClass("overflow")
    }
  }else{
    $("#queue .element").eq(queue.MAX_SIZE - 1).html("queue Underflow")
    $("#queue .element").eq(queue.MAX_SIZE - 1).addClass("overflow")
  }
})