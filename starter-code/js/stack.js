$(function() {
  StackDaStr = new StackDataStructure();
  StackDaStr.MAX_SIZE = 9;
  $("#btnAdd").click(function() {
    if(StackDaStr.push($("#inputValue").val())!=="Stack Overflow"){
      paintStack(StackDaStr.stackControl,true);
    }else{
      alert("Stack Overflow");
    }
  });
  $("#btnDelete").click(function() {
    debugger
    StackDaStr.pop();
    // $(".stackItem").val("");
    paintStack(StackDaStr.stackControl, false);
  });
});

function paintStack(array,isPush) {
  if(isPush){

    for (var i = 0; i < array.length; i++) {
      $("#" + i + "stack").val(array[i]);
      $("#" + i + "stack").prop("disabled", false);
      $("#" + i + "stack").addClass('blueBackGround');
    }
  }else{
    // for (var j = 0; j < array.length; j++) {
      $("#" + array.length-1 + "stack").val("");
      $("#" + array.length-1 + "stack").prop("disabled", true);
      $("#" + array.length-1 + "stack").removeClass('blueBackGround');
    // }
  }
}
