/* jQuery Manipulation */
var stackDisplay = new StackDataStructure();

$(document).ready(function () {
  var html = "";
  for (var i = stackDisplay.MAX_SIZE - 1; i >= 0; i--) {
    html += "<div class=element></div>";
  }
  $("#stack-col").html(html);

  $("#add-button").click(function () {
    var e = $('#stack-input').val();
    $('#stack-input').val("");

    var result = stackDisplay.push(e)

    if (result === "Stack Overflow")
      $('.stack-overflow').removeClass('hide')
    else {
      $('.stack-underflow').addClass('hide')
      for (var i = 0; i < stackDisplay.stackControl.length; i++) {
        var child = i;
        $('#stack-col').children().eq(child).text(stackDisplay.stackControl[i])
      }
    }
  });


  $("#take-button").click(function () {
    var result = stackDisplay.pop();

    if (result === "Stack Underflow")
      $('.stack-underflow').removeClass('hide')
    else {
      $('.stack-overflow').addClass('hide')
      for (var i = 0; i < stackDisplay.MAX_SIZE ; i++) {
        var child = i;
        $('.stack').children().eq(child).text("")
      }
      for (var i = 0; i < stackDisplay.stackControl.length; i++) {
        var child = i;
        $('#stack-col').children().eq(child).text(stackDisplay.stackControl[i])
      }
    }
  });

})