$(document).ready(function() {

  var stack = new StackDataStructure ();

  $(".stack .add").on('click',function() {
      $(".stack .unselected:last").addClass("active");
      $(".stack .unselected:last").removeClass("unselected");
      console.log(stack.push(0));
    });

    $(".stack .take").on('click',function() {
        $(".stack .active:first").addClass("unselected");
        $(".stack .active:first").removeClass("active");
        console.log(stack.pop());
      });


});
