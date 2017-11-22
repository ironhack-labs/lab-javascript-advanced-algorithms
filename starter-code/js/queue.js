$(function() {
  queueDatStr = new QueueDataStructure();
  queueDatStr.MAX_SIZE = 9;
  $("#btnAddQ").click(function() {
    if(queueDatStr.enqueue($("#inputQueueValue").val())!=="Queue Overflow"){
      $("#0queue").removeClass('flow');
      paintQueue(queueDatStr.queueControl);
    }else{
      $("#9queue").val("Queue Overflow");
      $("#9queue").addClass('flow');
      $("#9queue").prop('disabled', true);
    }
  });
  $("#btnDeleteQ").click(function() {
    if(queueDatStr.dequeue()!=="Queue Underflow"){
      $(".queueItem").val("");
      $(".queueItem").removeClass('blueBackGround');
      $(".queueItem").prop('disabled', true);
      paintQueue(queueDatStr.queueControl);
    }else{
      $("#0queue").val("Queue Underflow");
      $("#0queue").addClass('flow');
      $("#0queue").prop('disabled', true);
    }
  });
});

function paintQueue(array) {
  for (var i = 0; i < array.length; i++) {
    $("#" + i + "queue").val(array[i]);
    $("#" + i + "queue").addClass('blueBackGround');
    $("#" + i + "queue").prop('disabled', false);
  }
}
