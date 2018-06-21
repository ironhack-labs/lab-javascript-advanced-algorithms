$(function(){  
  var stack = new StackDataStructure();
  var inputText = $("input").val("");
  $(".flow").hide();

  $(".btn-outline-primary").on("click", function () {
    if (stack.canPush()){
      stack.push(inputText);
      $("#stack_container .bg:last").removeClass("bg")
                                    .addClass("stack_added").text(inputText[0].value);
    } else {
      $(".flow:first").show();
    }  
  });

  $(".btn-outline-danger").on("click", function () {
    if (stack.isEmpty()){
      $(".flow:last").show();
      $("#stack_container div:last").addClass("flow");
    } else {
      stack.pop(inputText);
      $("#stack_container .stack_added:first").removeClass("stack_added").addClass("bg").text("");
    }
  });

});