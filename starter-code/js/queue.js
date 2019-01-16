var queue = new QueueDataStructure()
queue.MAX_SIZE = 5

var queueDiv = document.getElementById("queue")

var newElement = document.createElement("div")
newElement.setAttribute("class", "element")

for(var i = 0; i < queue.MAX_SIZE; i++){
  queueDiv.innerHTML+= newElement.outerHTML
}

$(".add").click(function(){
  if(queue.canPush() == true){
    queue.push($("#queue-input").val())
    $(".element").eq(queue.MAX_SIZE - queue.queueControl.length).html($("#queue-input").val())
    $(".element").eq(queue.MAX_SIZE - queue.queueControl.length).addClass("has-content")
    $("#queue-input").val("")
    if($(".element").eq(queue.MAX_SIZE - 1).hasClass("overflow")){
      $(".element").eq(queue.MAX_SIZE - 1).removeClass("overflow")
    }
  }else{
    $(".element").eq(0).html("queue Overflow")
    $(".element").eq(0).addClass("overflow")
  }
})

$(".take").click(function(){
  if(queue.isEmpty() == false){
    $(".element").eq(queue.MAX_SIZE - queue.queueControl.length).html("")
    $(".element").eq(queue.MAX_SIZE - queue.queueControl.length).removeClass("has-content")
    if($(".element").eq(0).hasClass("overflow")){
      $(".element").eq(0).removeClass("overflow")
    }
    queue.pop()
  }else{
    $(".element").eq(queue.MAX_SIZE - 1).html("queue Underflow")
    $(".element").eq(queue.MAX_SIZE - 1).addClass("overflow")
  }
})