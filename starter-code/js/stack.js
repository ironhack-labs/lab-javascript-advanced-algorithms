$(function() {
  var stack = new StackDataStructure();
  var btnAdd = $('#stack-add');
  var btnTake = $('#stack-take');

  var stackWrp = $('#stack');
  stackWrp.find('li').not('.error').addClass('empty').html('&nbsp;');

  btnAdd.click(function() {
    var element = $('#stack-input').val();

    if (element.length > 0) {
      if (stackWrp.is(':visible')) {
        stackWrp.find('.error.under').addClass('d-none');
        btnTake.attr('disabled', false);
      }
      
      $('#stack-input').val('');

      var result = stack.push(element);

      if (result === 'Stack Overflow') {
        stackWrp.find('.error.over').removeClass('d-none');
        $(this).attr('disabled', true);
      } else {
        stackWrp.find('li.empty').last()
            .removeClass('empty list-group-item-secondary')
            .addClass('list-group-item-primary')
            .html(element);
      }
    }
  });

  btnTake.click(function() {
    stackWrp.find('.error.over').addClass('d-none');
    btnAdd.attr('disabled', false);

    if (stack.pop() === 'Stack Underflow') {
      stackWrp.find('.error.under').removeClass('d-none');
      $(this).attr('disabled', true);
    } else {
      stackWrp.find('li.list-group-item-primary').first()
          .removeClass('list-group-item-primary')
          .addClass('empty list-group-item-secondary')
          .html('&nbsp;');
    }
  });
});