var stack;
var stackElement;
var sTakeBtn = $("#stackTake");
var sAddBtn = $("#stackAdd");
var sOverflowAlert = $("#stack .overflow");
var sUnderflowAlert = $("#stack .underflow");
var pushElement = function() {
  $('#stackInput').val('');
  stackElement = '<div><span>';
  stackElement += stack.stackControl[stack.stackControl.length - 1];
  stackElement += '</span></div>';
  $('#stack .elements').append(stackElement);
};
var popElement = function() {
  $('#stack .elements div:last-child').remove();
};
$(document).ready(function() {
  stack = new StackDataStructure();

  $("#stackAdd").on('click', function() {
    if (stack.push($('#stackInput').val())) {
      pushElement();
    }
    if (stack.stackControl.length == stack.MAX_SIZE) {
      disable(this);
      sOverflowAlert.toggleClass('hide');
    }
    if (stack.stackControl.length == 1) {
      enable(sTakeBtn);
      sUnderflowAlert.addClass('hide');
    }
  });

  $("#stackTake").on('click', function() {
    if (stack.pop() != 'Stack Underflow') {
      popElement();
    }
    if (stack.stackControl.length < stack.MAX_SIZE) {
      enable(sAddBtn);
      sOverflowAlert.addClass('hide');
    }
    if (stack.isEmpty()) {
      disable(this);
      sUnderflowAlert.toggleClass('hide');
    }
  });
});
