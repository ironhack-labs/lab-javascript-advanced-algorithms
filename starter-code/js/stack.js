var stack = new StackDataStructure() 

stack.MAX_SIZE=8;

$('document').ready(function() {
    $(".stack").addClass("text-center");

    $("#stack-add").click(function() {
      var val = $("#stack-input").val();
      if(val) {
        var result = stack.push(val);
        if(result === "Stack Overflow") {
          showStackError(result);
        }  else {
          updateStackView();
        }
        $("#stack-input").val("");
      }
    });

    $("#stack-take").click(function() {
      var result = stack.pop();
      if(result === "Stack Underflow") {
        showStackError(result);
      }
      updateStackView();
      $("#stack-input").val("")
    });


  
});

function showStackError(error) {
    $("#stack-error").html(error);
    setTimeout(clearErrors, 1500);
}
function clearErrors() {
  $(".error").html("");
  var popResult = stack.pop();
}

function updateStackView() {
  stack.stackControl.forEach(function(el,ind){
    $($(".stack").get(7-ind)).html(el).addClass("new-view").addClass("data");
  })
  $(".stack:not(.new-view)").removeClass("data").html("");
  $(".stack").removeClass("new-view");

  $("#stack-length").html(stack.stackControl.length);

}