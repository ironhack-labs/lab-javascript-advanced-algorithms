var stack = new StackDataStructure();


$(document).ready(function() {
  for (var i = 1; i < 9; i++) {
    $("#empty").children().eq(i).text("(empty)"); 


  $("#add").on("click", function() {
  var text=$("#inputText").val();

  stack.stackControl.push(text);
    if (stack.stackControl.length > 8) {
    $("#empty").children().eq(0).text("Stack Overflow!");
    } else 
      
  });

});