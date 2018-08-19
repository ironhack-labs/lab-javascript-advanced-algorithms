$(document).ready(function(){
  var queue = new QueueDataStructure();

  $("#add-queue").click(function () {

    var counter = queue.queueControl.length;
    var newItem = $("#queue-input").val();

    queue.enqueue(newItem)
    $(".queue-element:eq(" + counter + ")").addClass("addedelement").text(newItem);

    $(".error-queue.under").fadeOut(300);
    if (!queue.canEnqueue()) return $(".error-queue.over").fadeIn(300);

  });

  $("#delete-queue").click(function() {

    var counter = 11 - queue.queueControl.length;

    queue.dequeue()
    $(".queue-element:nth-child(" + counter + ")").removeClass("addedelement").empty();

    $(".error-queue.over").fadeOut(300);
    if (queue.isEmpty()) return $(".error-queue.under").fadeIn(300);

  });

});