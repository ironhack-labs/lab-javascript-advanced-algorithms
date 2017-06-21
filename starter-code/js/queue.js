$(document).ready(function() {

  var queue = new StackDataStructure();

  $(".queue-btn.btn-add").click(function() {
    if (queue.canEnqueue()) {
      var stackName = $(".input-queue").val();
      queue.enqueue(stackName);
      updateStackDOM();
    } else {
      stackOverflowWarning();
    }
  });

  $(".queue-btn.btn-take").click(function() {
    if (queue.isEmpty()) {
      stackUnderflowWarning();
    } else {
      var stackName = $(".input-queue").val();
      queue.unshift(stackName);
      updateStackDOM();
    }
  });


  function updateStackDOM() {
    $(".queue").removeClass("blue");
    $(".queue").text("");
    for (var i = 0; i < queue.queueControl.length; i++) {
      $(".queue").eq(9 - i).addClass("blue");
      $(".queue").eq(9 - i).text(queue.queueControl[i]);
    }
  }

  function stackOverflowWarning() {}
  // $(".queue").overflow("Stack Overflow");
  //         $(".queue").eq(i-1).overflow;
  function stackUnderflowWarning() {}

});
