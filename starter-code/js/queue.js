$(document).ready(function () {
  let queueData = new QueueDataStructure();
  queueData.MAX_SIZE = 8;

  let htmlMenu = '';
  htmlMenu += '<h1>Queue</h1>';
  htmlMenu += '<input type = "text" class = "form-control" id = "queue-select-element" value = "" placeholder = "Add element to the stack..."/>';
  htmlMenu += '<button class = "btn btn-primary" id = "queue-button-add">Add</button>';
  htmlMenu += '<button class = "btn btn-danger" id = "queue-button-take">Take</button>';

  // Add all the div's to the HTML
  $('#queue-menu-content').html(htmlMenu);

  let htmlBlocks = '';
  for (let count = 0; count < queueData.MAX_SIZE; count += 1) {
    htmlBlocks += '<li class = "list-group-item"></li>';
  }
  // Add all the div's to the HTML
  $('#queue-ul-content').html(htmlBlocks);

  $("#queue-button-add").click(function() {
      if($('queue-select-element').val() === '' ) {
        //
      } else {
        //
      }
  });

  $("#queue-button-take").click(function() {
      //
  });
});
