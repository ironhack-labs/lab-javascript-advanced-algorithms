$( document ).ready(function() {
  var stack = new StackDataStructure();

  $('.s-overflow').hide();


  $('.stack-add').click(function() {
    if ($('.stack-input').val() != "") {
      let elem = $('.stack-input').val();
      stack.push(elem);
      $('.stack-input').val("");
      render();
    }
  });

  $('.stack-take').click(function() {
    stack.pop();
    render();
  });


  function render() {
    $('.s-overflow').hide();
    $('.s-underflow').hide();
    $('.s-elem').text("");
    $('.s-elem').removeClass("active");

    if (stack.isEmpty()) {
      $('.s-underflow').show();

    }

    if (!stack.canPush()) {
      $('.s-overflow').show();

    }

    for (i = 0; i < stack.stackControl.length; i++) {
      $('.s-elem' + i).text(stack.stackControl[i]);
      $('.s-elem' + i).addClass("active");

    }
  }
  
});




