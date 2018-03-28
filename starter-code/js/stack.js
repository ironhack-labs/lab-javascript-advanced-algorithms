$(document).ready(function() {
  var stack = new StackDataStructure();

  var $container = $(".container");

  var $stackContainer = $("<div class='col-md-5' id='stack'>");
  $stackContainer.appendTo($container);

  var $gap = $("<div class='col-md-2'>");
  $gap.appendTo($container);

  $("<h2>Stack</h2>").appendTo($stackContainer);
  $("<input class='form-control' id='stackItem' placeholder='Add the element to the stack...'>").appendTo($stackContainer);
  $("<button class='btn btn-primary col-md-12' id='addStack'>ADD</butto>").appendTo($stackContainer);
  $("<button class='btn btn-danger col-md-12' id='takeStack'>TAKE</button>").appendTo($stackContainer);
});