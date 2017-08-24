$(document).ready(function() {
  var stack = new StackDataStructure();

  $("#stack-add").on("click", function(e) {
    e.preventDefault();
    if (stack.canPush()) {
      var $stackVal = $("#stack-val").val();    

      stack.push($stackVal);
      var position = ".block-" + stack.stackControl.length;

      $(position).removeClass("grey");
      $(position).addClass("blue");
      var c = document.getElementsByClassName("stack");
      c.innerHTML = stack.stackControl[stack.stackControl.length];
    }
  });
});
