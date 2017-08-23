$(document).ready(function() {

  $('.add-stack').on("click", function() {
    var add = $('.form-stack').val();
    if (stack.canPush()) {
      stack.push(add);
      }
      else {
      $('.content-stack:first-child').html("Stack Overflow").addClass("overflow");
    }

    $($('.content-stack').children().get().reverse()).each(function(index) {
      $(this).html(stack.stackControl[index]).addClass("blue-div");
    });

  });

  $('.take-stack').on("click", function() {
    if (stack.isEmpty()) {
      $('.content-stack:last-child').html("Stack Underflow").addClass("overflow");
    } else {
      stack.pop();
      console.log(stack.stackControl);

      $($('.content-stack').children().get().reverse()).each(function(index) {
        if (stack.stackControl[index]) {
          $(this).html(stack.stackControl[index]).addClass("blue-div");
        } else {
          $(this).html("").removeClass("blue-div");
        }
      });
    }
  });

});
