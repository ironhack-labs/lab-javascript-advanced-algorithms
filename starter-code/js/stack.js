

//add to Stack
function updateStack(stk) {
  var currentBlock = '';

  // loop through stack and update visually
  for (var i = 0; i < stk.MAX_SIZE; i++) {

    currentBlock = '.stack-block-' + (i + 1);

    if (i < stk.stackControl.length ) {
      // fill blocks with values
      $(currentBlock).html(stk.stackControl[i]);
      $(currentBlock).addClass('full');
    } else {
      // update empty blocks
      $(currentBlock).html('');
      $(currentBlock).removeClass('full');
    }

  }

}


$(document).ready(function(){

    var myStack = new StackDataStructure;

    $('.stack-btn.add-btn').click( function(e) {
      if (myStack.canPush()) {
        myStack.push( $('.stack-input').val() );
        updateStack(myStack);
        $('.block.stack-underflow').hide();
      } else {
        $('.block.stack-overflow').show();
      }
    });

    $('.stack-btn.take-btn').click( function(e) {
      if (!myStack.isEmpty()) {
        myStack.pop();
        updateStack(myStack);
        $('.block.stack-overflow').hide();
      } else {
        $('.block.stack-underflow').show();
      }

    });

});
