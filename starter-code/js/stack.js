
// ----------------------------------

var stack = new StackDataStructure();

//JQuery stuff
$(document).ready(function() {
  var html = '';
  for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {
    html += '<div class="element"></div>';
  }
  $('#stack').html(html); 
  // if stack is not overflow
  // push new element
  $('.add').click(function(){
    // if Stack Overflow, put a red line at the top 
    if ( !stack.canPush() ) {
      displayOverflow();
    }

    if ( stack.canPush() && $('#new-element').val() !== "" ) {
      addElement();
    }
    
  });
  

  $('.take').click( function() {
    // if stack is empty
    if ( stack.isEmpty() ) {
      console.log("stack is empty");
      displayUnderflow();
    } else {
      removeElement();
    }
  });
    
  
});

function addElement() {
  $('#underflow').remove();
  // Add to stack
  var inputText = $('#new-element').val();
  stack.stackControl.push( inputText.trim() );
  $('#new-element').val('').focus();

  // Add to page
  var index = stack.stackControl.length - 1;
  var text = stack.stackControl[index];
  $('.element:last').text(text);
  $('.element:last').toggleClass('element stacked');
}



function removeElement() {
  //
  $('#overflow').remove();
  // Remove element from stack
  stack.stackControl.pop();
  // Remove from page
  $('.stacked:first').text('');
  $('.stacked:first').toggleClass('stacked element');
}

function displayOverflow() {
  $('#overflow').remove();
  var html = '<div id="overflow" class="alert alert-danger text-center">Stack Overflow</div>'
  $('#stack').prepend(html);
}

function displayUnderflow() {
  $('#underflow').remove();
  var html = '<div id="underflow" class="alert alert-danger text-center underflow">Stack Overflow</div>'
  $('#stack').append(html);
}
