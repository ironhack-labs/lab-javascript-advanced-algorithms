var stack = new StackDataStructure;
var justAdded = stack.stackControl[stack.stackControl.length-1]
stack.MAX_SIZE = 8;

$(document).ready(function(){

  $('#add-stack').click(function(){
    $(".underflow-stack").text("");
    $(".underflow-stack").toggleClass('underflow-stack row');
    if (stack.stackControl.length === stack.MAX_SIZE) {
        $(".stacked.top").text("Stack Overflow");
        $(".stacked.top").toggleClass("stacked overflow-stack");
    }
    stack.push($('#input-stack').val());
    var inputStack = $('#input-stack').val();
    $(".row:last").text(inputStack);
    $('#input-stack').val('');
    $(".row:last").toggleClass("row stacked");
  });

  $('#take-stack').click(function(){
    if (stack.stackControl.length === 0) {
      $(".row.bottom").text("Stack Underflow");
      $(".row.bottom").toggleClass("row underflow-stack");    
    }
    stack.pop(justAdded);
    $(".overflow-stack").text("");
    $(".overflow-stack").toggleClass('stacked overflow-stack'); 
    $(".stacked:first").text("");
    $('#input-stack').val('');
    $(".stacked:first").toggleClass("stacked row")
  });
})