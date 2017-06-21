

$(document).ready(function(){
  var stack = new StackDataStructure();

  $('.btn-Push').on('click', function(){
    var pushedElement = stack.push(1);
    if (pushedElement[0] == 1){
      var stackChild = stack.MAX_SIZE - stack.stackControl.length + 1;
      $(".stackBoxParent :nth-child("+stackChild+")").addClass('blue');
    } else if (pushedElement === "Stack Overflow") {
      alert ("Stack Overflow!");
    }
  });

  $('.btn-Pop').on('click', function(){
    var poppingMessage = stack.pop();
    if (poppingMessage !== "Stack Underflow"){
      var stackChild = stack.MAX_SIZE - stack.stackControl.length;
      $(".stackBoxParent :nth-child("+stackChild+")").removeClass('blue');
    } else {
      alert ("Stack Underflow!");
    }
  });

});
