$(function() {
  var stack = new StackDataStructure();
  var btnAdd = $('#stack-add');
  var btnTake = $('#stack-take');

  var stackWrp = $('#stack');
  stackWrp.find('li').not('.error').html('&nbsp;');

  btnAdd.click(function() {
    var element = $('#stack-input').val();

    if (element.length > 0) {
      $('#stack-input').val('');
      hideError(stackWrp.find('.error.under'), btnTake);

      if (stack.push(element) === 'Stack Overflow') {
        showError(stackWrp.find('.error.over'), $(this));
      } else {
        updateDataStructure(stackWrp, stack.stackControl.slice(), 1);
      }
    }
  });

  btnTake.click(function() {
    hideError(stackWrp.find('.error.over'), btnAdd);

    if (stack.pop() === 'Stack Underflow') {
      showError(stackWrp.find('.error.under'), $(this));
    } else {
      updateDataStructure(stackWrp, stack.stackControl.slice(), 1);
    }
  });
});
