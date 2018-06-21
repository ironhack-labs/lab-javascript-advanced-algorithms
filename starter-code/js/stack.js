$(document).ready(function () {
  
  let stack_ = new StackDataStructure();
  let stackOverflow = false;
  let stackUnderflow = false;

  let updateStack = function () {
    $('.stack').removeClass('box-on');
    $('.stack').html('');
    stack_.stackControl.forEach(function (e, i) {
      $('.stack:nth-child(' + String(stack_.MAX_SIZE+1-i) + ')').addClass('box-on');
      $('.stack:nth-child(' + String(stack_.MAX_SIZE+1-i) + ')').html(e);
    });
    
    if (stackOverflow)
    $('#overflow-box-stack').removeClass('hide');
    else
    $('#overflow-box-stack').addClass('hide');

    if (stackUnderflow)
    $('#underflow-box-stack').removeClass('hide');
    else
    $('#underflow-box-stack').addClass('hide');
  }

  $('#add-btn-stack').click(function () {
    if (stack_.canPush()) {
      stack_.push($('#input-text-stack').val());
      stackUnderflow = false;
      $('#pop-marker-stack').css('display','none');
    } else {
      stackOverflow = true;
    }
    updateStack();
  });

  $('#take-btn-stack').click(function () {
    if (stack_.isEmpty()) {
      stackUnderflow = true;
      $('#pop-marker-stack').css('display','none');
    } else {
      $('#pop-marker-stack').html(stack_.pop());
      $('#pop-marker-stack').css('display','flex');
      stackOverflow = false;
      
    }
    updateStack();
  });

  updateStack();
});
