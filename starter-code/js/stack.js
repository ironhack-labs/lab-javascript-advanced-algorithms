$(document).ready(function() {
  let controlIndex;
  let stackText;

  $("#toggle-queue-stack").click(function() {
    stack.stackControl = []
    queue.queueControl = []
    $(".stackEl").removeClass("stackEl-in");
    $(".stackEl").removeClass("stackEl-in-max");
    $(".stackEl").text('')
    $("#stack-push").toggleClass("queue");
    if ($("#stack-push").hasClass("queue")) {
      $("h2").text("Queue");
    } else {
      $("h2").text("Stack");
    }
  });

  $("#inp-text").focus(function() {
    stackText = $("#inp-text").prop("value");
    $(document).keypress(function(e) {
      stackText = $("#inp-text").prop("value");
    });
  });

  $("#stack-push").click(function() {
    $("#inp-text").blur(function() {
      stackText = $("#inp-text").prop("value");
    });
    if (!stackText) {
      alert("Input a new add content");
    } else {
      //Check if has Queue class
      if ($("#stack-push").hasClass("queue")) {
        queue.enqueue();
        console.log(queue.queueControl.length);
        controlIndex = queue.queueControl.length;
        console.log(controlIndex);
        if (!queue.canEnqueue()) {
          $(".stackEl:nth-child(" + controlIndex + ")").addClass(
            "stackEl-in-max"
          );
          $(".stackEl:nth-child(" + controlIndex + ")").text(queue.enqueue());
        } else {
          $(".stackEl:nth-child(" + controlIndex + ")").addClass("stackEl-in");
          $(".stackEl:nth-child(" + controlIndex + ")").removeClass(
            "stackEl-in-max"
          );
          $(".stackEl:nth-child(" + controlIndex + ")").text(stackText);
        }
        //Else act like Stack
      } else {
        stack.push();
        console.log(stack.stackControl.length);
        controlIndex = 8 - stack.stackControl.length + 1;
        console.log(controlIndex);
        if (!stack.canPush()) {
          $(".stackEl:nth-child(" + controlIndex + ")").addClass(
            "stackEl-in-max"
          );
          $(".stackEl:nth-child(" + controlIndex + ")").text(stack.push());
        } else {
          $(".stackEl:nth-child(" + controlIndex + ")").addClass("stackEl-in");
          $(".stackEl:nth-child(" + controlIndex + ")").removeClass(
            "stackEl-in-max"
          );
          $(".stackEl:nth-child(" + controlIndex + ")").text(stackText);
        }
      }
    }
  });

  $("#stack-pop").click(function() {
    if ($("#stack-push").hasClass("queue")) {
      if (!queue.isEmpty()) {
        queue.dequeue();
        console.log(queue.queueControl.length);
        controlIndex = queue.queueControl.length +1 ;
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass(
          "stackEl-in-max"
        );
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass("stackEl-in");
        $(".stackEl:nth-child(" + controlIndex + ")").text("");
      } else {
        $(".stackEl:nth-child(" + controlIndex + ")").addClass(
          "stackEl-in-max"
        );
        $(".stackEl:nth-child(" + controlIndex + ")").text(queue.dequeue());
      }
    } else {
      if (!stack.isEmpty()) {
        stack.pop();
        console.log(stack.stackControl.length);
        controlIndex = 8 - stack.stackControl.length;
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass(
          "stackEl-in-max"
        );
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass("stackEl-in");
        $(".stackEl:nth-child(" + controlIndex + ")").text("");
      } else {
        $(".stackEl:nth-child(" + controlIndex + ")").addClass(
          "stackEl-in-max"
        );
        $(".stackEl:nth-child(" + controlIndex + ")").text(stack.pop());
      }
    }
  });
});
