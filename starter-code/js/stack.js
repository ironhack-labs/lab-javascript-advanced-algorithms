$(document).ready(function () {
  var stackStructure = new StackDataStructure();
  var stack = $('.stack-element').not('#overflow, #underflow');

  // function updateStack() {
  //   for (i = 0; i < this.stackControl.length; i++) {
  //     console.log(stack[i]);
  //     if (stackStructure[i]) {
  //       stack[i].toggleClass('stack-element');
  //     }
  //   }
  // }

  $('.btn-primary').click(function () {
    var elementName = $('.input-group-text').val();
    if (elementName.length > 0) {
      stackStructure.push(elementName);
      stackStructure.flowControl();
      stackStructure.updateStack(stack);
    }
  });

  // $('btn-danger').click(stackStructure.pop());

});
