$(document).ready(function() {

  $('.add-stack').on("click", function() {
    var add = $('.form-control').val();
    stack.push(add);
    console.log(stack.stackControl);

    $($('.contentSlack').children().get().reverse()).each(function(index) {
      $(this).html(stack.stackControl[index]).addClass("blue-div");
    });

  });

  $('.take-stack').on("click", function() {
    stack.pop();
    console.log(stack.stackControl);

    $($('.contentSlack').children().get().reverse()).each(function(index) {
      if (stack.stackControl[index]){
        $(this).html(stack.stackControl[index]).addClass("blue-div");
      }
      else {
        $(this).html("").removeClass("blue-div");
      }
    });

  });

});
