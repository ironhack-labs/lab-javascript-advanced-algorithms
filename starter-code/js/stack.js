$(function(){
  var inputText = $("input").val("");
  
  var stack = new StackDataStructure();


  $(".btn-outline-primary").on("click", function () {
    if (stack.canPush()){
      stack.push(inputText);
      $("#stack_container .bg:last").removeClass("bg")
                                    .addClass("stack_added").text(inputText[0].value);
    } else {
      $("#stack_container").prepend("<div>Stack Overflow</div>");
      console.log("fulll")
    }  
  });

  $(".btn-outline-danger").on("click", function () {
    if (stack.isEmpty()){
        $("#stack_container").append("<div>Stack Underflow</div>");
    } else {
      stack.pop(inputText);
      console.log("empty")
      $("#stack_container .stack_added:first").removeClass("stack_added").addClass("bg").text("");
    }
    
  });



});