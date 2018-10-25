$(document).ready(function() {
  let controlIndex;

  let stackText;

 

  $("#stack-push").click(function() {
    $("#inp-text").blur(function() {
        stackText = $("#inp-text").prop("value");
      });
    if (!stackText) {
      alert("Write a new stack element name at the input")
    } else {
      stack.push();
      console.log(stack.stackControl.length);
      controlIndex = 8 - stack.stackControl.length + 1;
      console.log(controlIndex);
      if (!stack.canPush()) {
        $(".stackEl:nth-child(" + controlIndex + ")").addClass("stackEl-in-max");
        $(".stackEl:nth-child(" + controlIndex + ")").text(stack.push());
      } else {
        $(".stackEl:nth-child(" + controlIndex + ")").addClass("stackEl-in");
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass(
          "stackEl-in-max"
        );
        $(".stackEl:nth-child(" + controlIndex + ")").text(stackText);
      }
    }
  });

  $("#stack-pop").click(function() {
    stack.pop();
    console.log(stack.stackControl.length);
    controlIndex = 8 - stack.stackControl.length;
    if (!stack.isEmpty()) {
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass("stackEl-in-max");
        $(".stackEl:nth-child(" + controlIndex + ")").removeClass("stackEl-in");
        $(".stackEl:nth-child(" + controlIndex + ")").text("");
    } else {
        $(".stackEl:nth-child(" + controlIndex + ")").addClass("stackEl-in-max");
        $(".stackEl:nth-child(" + controlIndex + ")").text(stack.pop());

    }
  });
});
