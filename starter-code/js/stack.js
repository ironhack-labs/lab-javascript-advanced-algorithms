$(document).ready(function() {

  $('.add-stack').on("click", function() {
    var add = $('.form-stack').val();
    if (stack.canPush()) {
      stack.push(add);


      $($('.content-stack').children().get().reverse()).each(function(index) {
        if (stack.stackControl[index]) {
          $(this).html(stack.stackControl[index]).removeClass("grey-div overflow").addClass("blue-div");
        } else {
          $(this).html("").removeClass("blue-div overflow").addClass("grey-div");
        }
      });
    } else {
      $('.content-stack').children().html("STACK OVERFLOW").removeClass("blue-div grey-div").addClass("overflow");
    }


  });
  $('.take-stack').on("click", function() {
    if (stack.isEmpty()) {
      $('.content-stack').children().html("Stack Underflow").removeClass("grey-div").addClass("overflow");
    } else {
      stack.pop();
      console.log(stack.stackControl);

      $($('.content-stack').children().get().reverse()).each(function(index) {
        if (stack.stackControl[index]) {
          $(this).html(stack.stackControl[index]).removeClass("overflow").addClass("blue-div");
        } else {
          $(this).html("").removeClass("blue-div").addClass("grey-div");
        }
      });
    }
  });

});
