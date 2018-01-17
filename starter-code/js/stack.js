$(document).ready(function () {
      var myStack = new StackDataStructure();
      $('.add').click(function () {
            var value = $('.item-to-add').val();
            $('.item-to-add').val('');
            if (!myStack.canPush()) {
                  var arrLength = myStack.stackControl.length;
                  console.log(arrLength);
                  console.log('pila llena');
                  $('.stacked-overflow').addClass('visible').text('Stack Overflow');
            } else {
                  myStack.stackControl.push(value);
                  var arrLength = myStack.stackControl.length;
                  var totalLenght = myStack.MAX_SIZE;
                  var index = totalLenght - arrLength + 2;
                  $('.stacked:nth-child('+ index +')').addClass('added').text(value);
                  $('.stacked-underflow').removeClass('visible').text('');
                  index = 0;
                  console.log(arrLength);
            }
      });
      $('.take').click(function () {
            if (!myStack.isEmpty()) {
                  myStack.stackControl.pop();
                  $('.stacked:last-child').removeClass('stacked-underflow btn-danger');
                  $('.stacked-overflow').removeClass('visible').text('');
                  var arrLength = myStack.stackControl.length;
                  var totalLenght = myStack.MAX_SIZE;
                  var index = totalLenght - arrLength + 1;
                  console.log(arrLength);

                  $('.stacked:nth-child('+ index +')').removeClass('added').text('');
                  index = 0;
            } else {
                  var arrLength = myStack.stackControl.length;
                  console.log(arrLength);
                  $('.stacked:last-child').addClass('stacked-underflow btn-danger').text('Stack Underflow');
            }
      });
});