$(function() {

  var stack = new StackDataStructure();

  $('.addbutton').on('click', function() {
    var val = $('.inputvalue').val();
    stack.push(val);
    $('.stack-element').each(function(i){
      if ($(this).is('.stack-element:last:empty')) {
        $(this).html(stack.stackControl[0]);
      }
    });
  });

  $('.takebutton').on('click', function() {

  });

});
