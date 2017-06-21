$(document).ready(function(){
  var stack = new StackDataStructure();
  var id = stack.MAX_SIZE;

  $('#add-stack').click(function(){
    var response = stack.push(id);
    $("div.stack:nth-child(" + id + ")").css('background-color','blue');
    id--;
    console.log(response);
  });
  
  $('#take-stack').click(function(){
    id++;
    $("div.stack:nth-child(" + id + ")").css('background-color','#e1e5ed');
    var response = stack.pop();
    console.log(response);
  });
});
