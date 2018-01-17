var queue = new QueueDataStructure();

function updateQueueShowcase(elems) {
  console.log(elems)
  for (i = 0; i < queue.MAX_SIZE; i++) {
    var datas = $("#queue-container .data");
    if (!elems[i]) {
      $(datas[i]).html("");
    } else {
      $(datas[i]).html(elems[i]);
    }
  }
}

function emptyInputAlert() {
  $("#queue-form-group").addClass("has-error");
}

$("#add-queue").click(function() {
  if ($("#queue-elem").val() == "") {
    emptyInputAlert();
  } else {
    $("#queue-form-group").removeClass("has-error");
    var addElem = queue.enqueue($("#queue-elem").val());

    if (addElem == "Queue Overflow") {
      $("#queue-overflow").removeClass("hidden");
    } else {
      $("#queue-underflow").addClass("hidden");
      updateQueueShowcase(addElem);
    }
  }
});
$("#remove-queue").click(function() {
  var removeElem = queue.dequeue();

  if (removeElem == "Queue Underflow") {
    $("#queue-underflow").removeClass("hidden");
  } else {
    $("#queue-overflow").addClass("hidden");
    updateQueueShowcase(queue.queueControl);
  }
});
