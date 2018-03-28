$(document).ready(function() {
  var $container = $(".container");

  var $queueContainer = $("<div class='col-md-5' id='queue'>");
  $queueContainer.appendTo($container);

  $("<h2>Queue</h2>").appendTo($queueContainer);
  $("<input class='form-control' id='queueItem' placeholder='Add the element to the queue...'>").appendTo($queueContainer);
  $("<button class='btn btn-primary col-md-12' id='addQueue'>ADD</butto>").appendTo($queueContainer);
  $("<button class='btn btn-danger col-md-12' id='takeQueue'>TAKE</button>").appendTo($queueContainer);

});