$(document).ready(function () {
  var stackStructure = new StackDataStructure();
  var stack = $('.stack-element').not('#overflow, #underflow');

  // PUSH
  $('.btn-primary').click(function () {
    var elementName = $('.input-group-text').val();
    if (elementName.length > 0) {
      stackStructure.push(elementName);
      stackStructure.flowControl();
      stackStructure.updateStackPush(stack);
    }
  });

  // POP
  $('.btn-danger').click(function () {
    $('#poppedElement').text(stackStructure.pop());
    stackStructure.flowControl();
    stackStructure.updateStackPop();
  });
});
