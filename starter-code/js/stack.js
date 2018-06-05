$(document).ready(function () {
  var stackStructure = new StackDataStructure();
  var stack = $('.stack-element').not('.red');

  stackStructure.flowControl();

  // PUSH
  $('#stack-btn-primary').click(function () {
    var elementName = $('.input-group-text').val();
    if (elementName.length > 0) {
      stackStructure.push(elementName);
      stackStructure.flowControl();
      stackStructure.updateStackPush(stack);
    }
  });

  // POP
  $('#stack-btn-danger').click(function () {
    $('#poppedElement').text(stackStructure.pop());
    stackStructure.flowControl();
    stackStructure.updateStackPop();
  });
});
