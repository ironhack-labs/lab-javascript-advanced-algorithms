$(document).ready(function() {
  var stack = new StackDataStructure();

  $("#stack-add").on("click", function() {

    if (stack.canPush()) {
      var $stackVal = $("#stack-val").val();
      console.log($stackVal);

      stack.push($stackVal);

      var position = "block-" + stack.stackControl.length;

      console.log(position);

      $(position).removeClass("grey");
      $(position).addClass("blue");
      var c = document.getElementsByClassName("stack");
      c.innerHTML = stack.stackControl[stack.stackControl.length];
    }
  });
});
