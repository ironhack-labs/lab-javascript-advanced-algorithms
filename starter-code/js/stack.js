$(function(){
  var stack = new StackDataStructure();

  $('#c1 .btn-primary').click(function(){
    if(stack.canPush()){
      stack.push(1);
      $('#stack').children().text('');
      $('#stack .colorTake:last').addClass('colorAdd');
      $('#stack .colorTake:last').removeClass('colorTake');
      if(stack.stackControl.length == 0){
        $('#stack').children().addClass('colorTake');
        $('#stack').children().removeClass('colorError');
      }
    } else{
      $('#stack').children().addClass('colorError');
      $('#stack').children().removeClass('colorTake');
      $('#stack').children().removeClass('colorAdd');
      $('#stack').children().text('STACK OVERFLOW').css({
        color: "red",
        fontSize: "18px",
        textAlign: "center"
      });
    }
  });

  $('#c1 .btn-danger').click(function(){
    if(stack.isEmpty()){
      $('#stack').children().addClass('colorError');
      $('#stack').children().text('STACK UNDERFLOW').css({
        color: "red",
        fontSize: "18px",
        textAlign: "center"
      });
      $('#stack').children().toggleClass('colorError');
    } else{
      stack.pop();
      if(stack.stackControl.length == stack.MAX_SIZE -1){
        $('#stack').children().addClass('colorAdd');
        $('#stack').children().removeClass('colorError');
      }
      $('#stack').children().text('');
      $('#stack .colorAdd:first').addClass('colorTake');
      $('#stack .colorAdd:first').removeClass('colorError');
      $('#stack .colorAdd:first').removeClass('colorAdd');

    }
  });

});
