/* jQuery Manipulation */
var stackDisplay = new StackDataStructure();

$(document).ready(function () {
  var html = "";
  for (var i = stackDisplay.MAX_SIZE - 1; i >= 0; i--) {
    html += "<div class=element></div>";
  }
  $("#queue-col").html(html);
})