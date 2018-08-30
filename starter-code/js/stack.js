/* jQuery Manipulation */
var stackDisplay = new StackDataStructure();

$(document).ready(function () {

  $("#stack-add-button").click(function () {
    var e = $('#stack-input').val();
    $('#stack-input').val("");

    var result = stackDisplay.push(e)

    if (result === "Stack Overflow")
      $('.stack-overflow').removeClass('hide')
    else {
      $('.stack-underflow').addClass('hide')
      for (var i = 0; i < stackDisplay.stackControl.length; i++) {
        var child = 5 - i;
        $('.stack').children().eq(child).text(stackDisplay.stackControl[i])
      }
    }
  });


  $("#stack-take-button").click(function () {
    var result = stackDisplay.pop();
    $("#stack-input").val("");

    if (result === "Stack Underflow")
      $('.stack-underflow').removeClass('hide')
    else {
      $('.stack-overflow').addClass('hide')
      for (var i = 0; i < stackDisplay.MAX_SIZE ; i++) {
        var child = 5- i;
        $('.stack').children().eq(child).text("")
      }
      for (var i = 0; i < stackDisplay.stackControl.length; i++) {
        var child = 5 - i;
        $('.stack').children().eq(child).text(stackDisplay.stackControl[i])
      }
    }
  });

})