$(function() {

  // create Stack
  const stack = new StackDataStructure();
  // const stackControl Array
  const arrayS = stack.stackControl;
  
  // default markup
  $('#stackelement').focus(); // focus on input at load
  $('.under').css('display', 'block'); // show HTML 'Stack Underflow' at load
  
  // create stacks array
  var stackDivs = $.map( $('.stack-element') , function(item) { return item; });
  
  function addStack() { // function for input Enter keypress && 'STACK' button click
    stack.push($('#stackelement').val()); // add to arrayS
    console.log(arrayS);
    
    for (let i = 9, j = 0; j < 10; i--, j++) { // insert input value on HTML div
      if (arrayS[j] !== undefined) { $(stackDivs[i]).html(arrayS[j]); }
    }
    
    if (stack.isEmpty() === false) { $('.error-stack.under').fadeOut(250); } // arrayS not empty => hide HTML 'Stack Underflow'
    
    if (stack.canPush() === false) { $('.error-stack.over').fadeIn(250); } // MAX_SIZE reached => show HTML 'Stack Overflow'
    
    return $('#stackelement').val(''); // reset input values
  }
  
  $('#stackelement').keypress( e => { // on input Enter keypress
    if (e.which == 13 && $('#stackelement').val() !== '') return addStack();
  });
  
  $('#add-stack').click( () => { // on 'STACK' button click
    if ($('#stackelement').val() !== '') addStack();
    return $('#stackelement').focus();
  });
  
  $('#delete-stack').click(() => { // on 'REMOVE' button click
    let last = arrayS.length - 1; // Remove last arrayS item, and remove empty slot
    if (last >= 0) {
      delete arrayS[last];
      arrayS.length = last;
    }

    console.log(arrayS);

    for (let i = 9, j = 0; j < 10; i--, j++) { // remove input value on HTML div
      if (arrayS[j] === undefined) { $(stackDivs[i]).html(''); }
    }

    if (stack.canPush() === true) { $('.error-stack.over').fadeOut(250); } // arrayS not full => hide 'Stack Overflow'

    if (stack.isEmpty() === true) { $('.error-stack.under').fadeIn(250); } // arrayS empty => show 'Stack Underflow'

    return $('#stackelement').focus();
  });
  
});