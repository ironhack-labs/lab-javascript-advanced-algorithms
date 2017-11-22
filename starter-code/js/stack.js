$(function() {
  stackDaStr = new StackDataStructure();
  stackDaStr.MAX_SIZE = 9;
  $("#btnAdd").click(function() {
    if(stackDaStr.push($("#inputValue").val())!=="Stack Overflow"){
      $("#0stack").removeClass('flow');
      paintStack(stackDaStr.stackControl);
    }else{
      $("#9stack").val("Stack Overflow");
      $("#9stack").addClass('flow');
      $("#9stack").prop('disabled', true);
    }
  });
  $("#btnDelete").click(function() {
    if(stackDaStr.pop()!=="Stack Underflow"){
      $(".stackItem").val("");
      $(".stackItem").removeClass('blueBackGround');
      $(".stackItem").prop('disabled', true);
      paintStack(stackDaStr.stackControl);
    }else{
      $("#0stack").val("Stack Underflow");
      $("#0stack").addClass('flow');
      $("#0stack").prop('disabled', true);
    }
  });
});

function paintStack(array) {

  for (var i = 0; i < array.length; i++) {
    $("#" + i + "stack").addClass('blueBackGround');
    $("#" + i + "stack").val(array[i]);
    $("#" + i + "stack").prop('disabled', false);
  }
}
