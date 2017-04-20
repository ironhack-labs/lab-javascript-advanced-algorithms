$(document).ready(function(){
  queue = new QueueDataStructure()

  $(".queue-blue").on("click",function(){
    queue.queueControl.push("QUEUE")
    console.log(queue.queueControl)


    $("#queue-number .q-number:nth-child("+(9-queue.queueControl.length)+")").addClass("active")
  })
  $(".queue-red").on("click",function(){
    queue.dequeue()
    console.log(queue.queueControl)
    $("#queue-number .q-number:nth-child("+(queue.queueControl.length-1)+")").removeClass("active")
  })
})
