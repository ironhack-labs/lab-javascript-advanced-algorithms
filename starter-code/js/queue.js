
var queue = new QueueDataStructure();
var $qList = $('#queueList');
var $qAdd = $("#queueAdd");
var $qTake = $("#queueTake");
var $qInput = $("#queueInput");
var $qOverflow = $("#qOverflow");
var $qUnderflow = $("#qUnderflow");

for (var i = 0; i < queue.MAX_SIZE; i++) {
  $qList.append('<li></li>');
}

var $qItems = $('#queueList li');

$qAdd.click(function () {
  $qInput.focus();
  clear($qUnderflow, "underflow");
  if ($qInput.val() === "") {
    alert("You can't add an empty item");
  } else {
    qCheckOverflow();
  }
});

var qCheckOverflow = function () {
  if (queue.enqueue($qInput.val()) === "Queue Overflow") {
    $qOverflow.text("Queue Overflow");
    $qOverflow.addClass("overflow");
  } else {
    //var i = queue.queueControl.length - 1;
    //$qItems.eq(i).text($qInput.val());
    //$qItems.eq(i).addClass("full");
    //$qInput.val("");

    var i = queue.MAX_SIZE - queue.queueControl.length;
    $qItems.eq(i).addClass("full");
    for (var j = 0; j < queue.queueControl.length; j++){
      $qItems.eq(i + j).text(queue.queueControl[queue.queueControl.length - 1 - j]);
    }
  }
  $qInput.val("");
}

$qTake.click(function () {
  clear($qOverflow, "overflow");
  qCheckUnderflow();
});

var qCheckUnderflow = function () {
  if (queue.dequeue() === "Queue Underflow") {
    $qUnderflow.text("Queue Underflow");
    $qUnderflow.addClass("underflow");
  } else {
    var i = queue.MAX_SIZE - queue.queueControl.length - 1;
    $qItems.eq(i).text("");
    $qItems.eq(i).removeClass("full");
  }
  $qInput.val("");
}

var clear = function (elem, clas) {
  elem.text("");
  elem.removeClass(clas);
}
