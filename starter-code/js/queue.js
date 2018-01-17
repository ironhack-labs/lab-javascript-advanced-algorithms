var queue = new QueueDataStructure();

$("#add-button-queue").on("click", function() {
  $("#queue-message").html("");
  $("#queue>.flow:last").addClass("hidden");
  if ($("#queue-input").prop("value") === "") {
    $("#queue-message").html("No input!");
  } else if (queue.canEnqueue() === false) {
    $("#queue>.flow:first").removeClass("hidden");
  } else {
    queue.enqueue($("#queue-input").prop("value"));
    $(".queue-spot.empty:last").addClass("filled");
    $(".queue-spot.empty:last").removeClass("empty");
    $(".queue-spot.filled:first").html($("#queue-input").prop("value"));
  }
  $("#queue-input").prop("value", "");
});

$("#take-button-queue").on("click", function() {
  $("#queue-message").html("");
  $("#queue-input").prop("value", "");
  $("#queue>.flow:first").addClass("hidden");
  if (queue.isEmpty() === true) {
    $("#queue>.flow:last").removeClass("hidden");
  } else {
    for (var i = 0; i < queue.queueControl.length - 1; i++) {
      $(".queue-spot.filled")[queue.queueControl.length - i - 1].innerText = $(
        ".queue-spot.filled"
      )[queue.queueControl.length - i - 2].innerText;
    }
    $(".queue-spot.filled:first").addClass("empty");
    $(".queue-spot.empty:last").removeClass("filled");
    $(".queue-spot.empty:last").html("");

    $("#queue-message").html(
      "Last item pulled out: <b>" + queue.dequeue() + "</b>"
    );
  }
});
