var stack = new StackDataStructure();

//JQuery stuff
$(document).ready(function() {
  var html = '';
  for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {   
    html += '<div class="element"></div>';
  }
  $('#stack').html(html);     // add an empty div element to the stack until it has no space


  $('.add').click(function(){
    if ( !stack.canPush() ) {         // if Stack is full, display red alert
      displayOverflow();
    }

    if ( stack.canPush() && $('#new-element').val() !== "" ) {  //to make sure nothing empty is pushed 
      addElement();
    }
    
  });
  

  $('.take').click( function() {
    if ( stack.isEmpty() ) {              
      displayUnderflow(); //display red alert
    } else {
      removeElement();  
    }
  });
  
});

function addElement() {
  $('#underflow').remove(); 

  // Add to stack
  var inputText = $('#new-element').val();
  stack.stackControl.push(inputText);
  $('#new-element').val('').focus();   // making the input box empty after pushing element 

  // Add to page
  var index = stack.stackControl.length - 1;
  var text = stack.stackControl[index];    //Adding it to the end 
  $('.element:last').text(text);
  $('.element:last').toggleClass('element stacked'); // In that case, remove element and add stacked
}



function removeElement() {
  $('#overflow').remove();
  // Remove element from stack
  stack.stackControl.pop();
  // Remove from page
  $('.stacked:first').text('');
  $('.stacked:first').toggleClass('stacked element'); // In that case, remove stacked and add element
}

function displayOverflow() {
  $('#overflow').remove();
  var html = '<div id="overflow" class="alert alert-danger text-center">TOO MANY ITEMS</div>'
  $('#stack').prepend(html);  //adding to beginning
}

function displayUnderflow() {
  $('#underflow').remove();
  var html = '<div id="underflow" class="alert alert-danger text-center underflow">NO ITEM LEFT</div>'
  $('#stack').append(html); //adding to end
}