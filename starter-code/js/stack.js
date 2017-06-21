$(document).ready(function(){
  var stack = new StackDataStructure();
  var downStack = stack.MAX_SIZE;
  var upStack = 1;

  $('#add-stack').click(function(){
    var response = stack.push(downStack);
    $("div.stack:nth-child(" + downStack + ")").css('background-color','blue');
    downStack--;
    console.log(response);
  });

  $('#take-stack').click(function(){
    $("div.stack:nth-child(" + upStack + ")").css('background-color','#e1e5ed');
    upStack++;
    var response = stack.pop();
    console.log(response);
  });
});
