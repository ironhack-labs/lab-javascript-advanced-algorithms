$(document).ready(function () {
  let stackData = new StackDataStructure();
  stackData.MAX_SIZE = 8;

  let htmlMenu = '';
  htmlMenu += '<h1>Stack</h1>';
  htmlMenu += '<input type = "text" class = "form-control" id = "stack-select-element" value = "" placeholder = "Add element to the stack..."/>';
  htmlMenu += '<button class = "btn btn-primary" id = "stack-button-add">Add</button>';
  htmlMenu += '<button class = "btn btn-danger" id = "stack-button-take">Take</button>';

  // Add all the div's to the HTML
  $('#stack-menu-content').html(htmlMenu);

  let htmlBlocks = '';
  for (let count = 0; count < stackData.MAX_SIZE; count += 1) {
    htmlBlocks += '<li class = "list-group-item"></li>';
  }
  // Add all the div's to the HTML
  $('#stack-ul-content').html(htmlBlocks);

  $("#stack-button-add").click(function() {
    if($('#stack-select-element').val() !== '' ) {
      if(stackData.stackControl.length === stackData.MAX_SIZE && $('#stack-overflow').length !== 1) {
        $('#stack-ul-content').prepend('<li class = "list-group-item" id = "stack-overflow">Stack Overflow</li>');
      } else {
        if($('#stack-overflow').length !== 1 && $('#stack-underflow').length !== 1) {
          stackData.push($('#stack-select-element').val());
          $('#stack-ul-content li').addClass('active');
          console.log(stackData.stackControl);
        }
      }
    }
  });

  $("#stack-button-take").click(function() {
    if(stackData.stackControl.length === 0) {
      if($('#stack-underflow').length !== 1) {
        $('#stack-ul-content').append('<li class = "list-group-item" id = "stack-underflow">Stack Underflow</li>');
      }
    } else {
      if($('#stack-overflow').length !== 1 && $('#stack-underflow').length !== 1) {
        stackData.pop();
        $('#stack-ul-content li').removeClass('active');
        console.log(stackData.stackControl);
      }
    }

  });
});
