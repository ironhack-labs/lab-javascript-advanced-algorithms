/* jQuery Manipulation */
var queueDisplay = new QueueDataStructure();

$(document).ready(function () {

  $("#queue-add-button").click(function () {
    var e = $('#queue-input').val();
    $('#queue-input').val("");

    var result = queueDisplay.push(e)

    if (result === "Queue Overflow") 
      $('.queue-overflow').removeClass('hide')
    else {
      $('.queue-underflow').addClass('hide')
      for (var i = 0; i < queueDisplay.queueControl.length; i++) {
        var child = 5 - i;
        $('.queue').children().eq(child).text(queueDisplay.queueControl[i])
      }
    }
  });


  $("#queue-take-button").click(function () {
    var result = queueDisplay.pop();
    $("#queue-input").val("");

    if (result === "Queue Underflow")
      $('.queue-underflow').removeClass('hide')
    else {
      $('.queue-overflow').addClass('hide')
      for (var i = 0; i < queueDisplay.MAX_SIZE ; i++) {
        var child = 5- i;
        $('.queue').children().eq(child).text("")
      }
      for (var i = 0; i < queueDisplay.queueControl.length; i++) {
        var child = 5 - i;
        $('.queue').children().eq(child).text(queueDisplay.queueControl[i])
      }
    }
  });

})