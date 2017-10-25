$(document).ready(function() {
  var queue = new QueueDataStructure();
  // Click on Add button on Queue Column.
  $("#add2").click(function() {
    // If queue.push("inputvalue") happens, then add and remove classes.
    if (queue.enqueue($("#inputq").val()) != "Queue Overflow") {
      $(".queue:first").addClass("greenq").removeClass("queue");
      // Hide the underflowq div if it's present.
      $(".underflowq").css("display", "none");
      // Change numbers continuously for each greenq div.
      $(".greenq").each(function(index) {
        $(this).text(queue.queueControl[index]);
      });
      // Reset the input value.
      $("#inputq").val("");
      // If it returns "Queue Overflow" then alert it.
    } else {
      alert("Queue Overflow!");
      // Show the overflow div if it's display is none.
      $(".overflowq").css("display", "block");
    }
  });

  // Click on Take button on SQueue Column.
  $("#danger2").click(function() {
    // If pop happens, then remove and add classes.
    if (queue.dequeue() != "Queue Underflow") {
      // Write the element which left the queue.
      $("#leftq").text("An element " + "("+$(".greenq:last").text()+")");
      $(".greenq:last").addClass("queue").removeClass("greenq").text("");
      // Hide the overflow div if it's present.
      $(".overflowq").css("display", "none");
      // If it returns "Stack Underflow" then alert it.
    } else {
      alert("Queue Underflow!!");
      // Show the underflows div if its hidden.
      $(".underflowq").css("display", "block");
    }
  });
});
