var queue = new QueueDataStructure();

$("#add-queue").click(function(){
  var i = 9 - queue.queueControl.length;
  queue.canPush();
  if (queue.canPush() === true){
    $("#delete-queue").next().hide();
    $("#queue-div div").last().hide();
    if(i>=0){
  var inputValue = $("#queueelement").val();
  queue.push(inputValue);
  $(".queue-element:eq("+i+")").html(inputValue);
    } 
    }else{
      console.log("overflow")
      $("#delete-queue").next().show();
  }
})

$("#delete-queue").click(function(){
  var i= 10 - queue.stackControl.length;
  queue.isEmpty();
  if (queue.isEmpty() === false){
    $("#queue-div div").last().hide();
    $("#delete-queue").next().hide();
  var takeValue = $(".queue-element:eq("+i+")").html();
  queue.queueControl.pop();
  $("#removed_queue strong").first().html("Removed element: "+takeValue);
  $(".queue-element:eq("+i+")").html("");
  console.log(queue.queueControl)
    }else{
      $("#queue-div div").last().show();
  }
})
