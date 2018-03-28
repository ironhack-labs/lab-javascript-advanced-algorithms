$(document).ready(function() {
  var stack = new StackDataStructure();

  //stack.MAX_SIZE = $('#maxSizeStack').val()

  $('#btn-stack').on('click', function() {
    stack.push($('#maxSizeStack').val());
    var adv = $('#maxSizeStack').val();
    $('.stackElement').text(adv);
    if (stack.canPush()) {
      $('#stack').append('<div class="row stackElement"><p>' + adv +'</p></div>');
      $('#adv-stack').text('Stack: ' + adv);
    } else {
      $('#adv-stack').text(stack.push());      
    }
  });

  $('#btn-unstack').on('click', function() {    
    var adv = stack.pop($('#elementStack'));
    $('#adv-stack').text(adv)
    $('stackElement').first().remove()
  });
})