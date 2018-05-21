$(function() {
    var queue = new QueueDataStructure();
  
    $("#take-element-queue").on("click", function() {
      removeFromQueue();
    });
    
    $("#add-element-queue").on("click", function() {
      addToQueue();
    });
  
    function addToQueue() {
      var valueToQueue = $("#input-element-queue").val();
  
      if (!valueToQueue) {
        
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
      $("#input-element-queue").val("");
    }
  
    function removeFromQueue() {
      if (!queue.dequeue()) {
        $("#queue-top")
          .html("<p>Queue Underflow</p>")
          .addClass("over");
      } else {
        var teste = $(".occupied:first")
          .removeClass("occupied")
          .empty();
  
        $("#queue-bottom")
          .html("<p>Queue Overflow</p>")
          .removeClass("over")
          .addClass("hidden");
      }
    }
  });