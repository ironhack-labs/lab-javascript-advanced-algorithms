$(document).ready(function () {
      var myStack = new StackDataStructure();
      $('.add').click(function () {
            var value = $('.item-to-add').val();
            $('.item-to-add').val('');
            if (!myStack.canPush()) {
                  $('.stacked-overflow').addClass('visible').text('Stack Overflow');
            } else {
                  myStack.stackControl.push(value);
                  var index = myStack.MAX_SIZE - myStack.stackControl.length + 2;
                  $('.stacked:nth-child(' + index + ')').addClass('added').text(value);
                  $('.stacked-underflow').removeClass('visible').text('');
            }
      });
      $('.take').click(function () {
            if (!myStack.isEmpty()) {
                  myStack.stackControl.pop();
                  $('.stacked:last-child').removeClass('stacked-underflow btn-danger');
                  $('.stacked-overflow').removeClass('visible').text('');
                  var index = myStack.MAX_SIZE - myStack.stackControl.length + 1;
                  $('.stacked:nth-child(' + index + ')').removeClass('added').text('');
            } else {
                  $('.stacked:last-child').addClass('stacked-underflow btn-danger').text('Stack Underflow');
            }
      });
});