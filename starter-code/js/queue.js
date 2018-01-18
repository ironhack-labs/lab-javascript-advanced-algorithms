$(document).ready(function() {
  var queueDataStructure = new QueueDataStructure();
  var focusedInput = null;
  var addingQueue = null;
  var queueInput = $("#queueInput");

  //Add Queue button
  $("#addQueue").on("click", function() {
    //$("#stackUnderflow").addClass("hidden");
    if (queueInput.val() !== "" && queueDataStructure.canEnqueue() === true) {
      $(".queueItems>.notQueued:last").text(queueInput.val());
      addQueueColor(
        queueDataStructure.MAX_SIZE - 1 - queueDataStructure.queueControl.length
      );
      queueDataStructure.enqueue(queueInput.val());
    } else if (!queueDataStructure.canEnqueue()) {
      $("#queueOverflow").removeClass("hidden");
    }
  });

  //Take Queue button
  $("#takeQueue").on("click", function() {
    //$("#queueOverflow").addClass("hidden");
    if (queueDataStructure.isEmpty()) {
      $("#queueUnderflow").removeClass("hidden");
    } else {
      $(".queueItems>.Queued:first").text("");
      removeQueueColor(
        queueDataStructure.MAX_SIZE + 2 - queueDataStructure.queueControl.length
      );
      queueDataStructure.queueControl = queueDataStructure.queueControl.slice(
        0,
        queueDataStructure.queueControl.length - 1
      );
    }
  });

  //Take Stack button
});

//Function to change the class formatting the background color for stacks
//It takes the length of the queueDataStructure.queueControl array and applies the color to the last n elements of the stack
function addQueueColor(nthChild) {
  //Change format of the highest stack
  $(".queueItems>:nth-child(" + nthChild + ")")
    .removeClass("notQueued")
    .addClass("list-group-item-info Queued");
  //Change the format of all previous stacks
  $(".stackItems>.Queued:first")
    .nextAll()
    .removeClass("notQueued")
    .addClass("list-group-item-info Queued");
}

function removeQueueColor(nthChild) {
  //Change format of the highest stack
  $(".queueItems>:nth-child(" + nthChild + ")")
    .removeClass("Queued list-group-item-info")
    .addClass("notQueued");
  //Change the format of all stacks leading to that one (as seen form above)
  $(".queueItems>.notQueued:last")
    .prevAll()
    .removeClass("Queued list-group-item-info")
    .addClass("notQueued");
}
