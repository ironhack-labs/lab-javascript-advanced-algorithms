var queue = new QueueDataStructure() 

queue.MAX_SIZE=8;

$('document').ready(function() {
    $(".queue").addClass("text-center");

    $("#queue-add").click(function() {
      var val = $("#queue-input").val()
      if(val) {
        var result = queue.enqueue(val);
        if(result === "Queue Overflow") {
          showQueueError(result);
        }  else {
          updateQueueView();
        }
        $("#queue-input").val("");
      }
    });

    $("#queue-take").click(function() {
      var result = queue.dequeue();
      if(result === "Queue Underflow") {
        showQueueError(result);
      }
      updateQueueView();
      $("#queue-input").val("")
    });


});

function showQueueError(error) {
    $("#queue-error").html(error);
    setTimeout(clearErrors, 1500);
}
function clearErrors() {
  $(".error").html("");
  var popResult = queue.pop();
}

function updateQueueView() {
  queue.queueControl.forEach(function(el,ind){
    $($(".queue").get(7-ind)).html(el).addClass("new-view").addClass("data");
  })
  $(".queue:not(.new-view)").removeClass("data").html("");
  $(".queue").removeClass("new-view");

  $("#queue-length").html(queue.queueControl.length);

}