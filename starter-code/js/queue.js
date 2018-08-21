var queue = new QueueDataStructure();

$("#add-queue").click(function() {
  var element = $("#queue-input").val();
  var content = queue.enqueue(element);

  if (content == "Queue Overflow") {
    $(".error-queue.over").show();
    return;
  }

  $(".error-queue.under").hide();

  for (let i = 0; i < content.length; i++) {
    $(".queue-element")
      .eq(i)
      .addClass("addedelement")
      .empty()
      .append(content[i]);
  }

  $("#queue-input").val("");
});

$("#delete-queue").click(function() {
  var lastElement = queue.dequeue();

  if (lastElement == "Queue Underflow") {
    $(".error-queue.under").show();
    return;
  }
  $(".error-queue.over").hide();

  $(".queue-element")
    .eq(queue.queueControl.length)
    .removeClass("addedelement")
    .empty();
});
