$(function() {
  var queue = new QueueDataStructure();

  //REMOVE ELEMENT FROM queue
  $("#take-element-queue").on("click", function() {
    removeFromQueue();
  });
  //ADD ELEMENT TO queue
  $("#add-element-queue").on("click", function() {
    addToQueue();
  });
  //CLEAR INPUT FIELD
  $("#queue-clear-input").on("click", function() {
    $("#input-element-queue").val("");
  });

  function addToQueue() {
    var valueToQueue = $("#input-element-queue").val();

    if (!valueToQueue) {
      alert("Please input a value to queue!");
    } else {
      if (queue.enqueue(valueToQueue)) {
        valueToQueue = "<p>" + valueToQueue + "</p>";
        var freeCell = queue.queueControl.length - 1;
        $(".queue-elements > ul > li")
          .eq(freeCell)
          .addClass("occupied")
          .html(valueToQueue);
        $("#queue-top").removeClass("over");
      } else {
        $("#queue-bottom")
          .html("<p>Queue Overflow</p>")
          .addClass("over")
          .removeClass("hidden");
      }
    }
  }

  function removeFromQueue() {
    if (!queue.dequeue()) {
      $("#queue-top")
        .html("<p>Queue Underflow</p>")
        .addClass("over");
    } else {
      var freeCell = queue.queueControl.length - 1 - queue.MAX_SIZE;
      $(".queue-elements > ul > li")
        .eq(freeCell)
        .removeClass("occupied")
        .empty();

      $("#queue-bottom")
        .html("<p>Queue Overflow</p>")
        .removeClass("over")
        .addClass("hidden");
    }
  }
});
