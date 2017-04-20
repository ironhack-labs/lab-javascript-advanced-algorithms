var stack = new StackDataStructure();
var queue = new QueueDataStructure();
stack.MAX_SIZE=10;


$(document).ready(function() {
  $(".stack-blue").on("click", function(){
    $(".st").last().addClass("active");
    $(".st").last().removeClass("st");
    stack.stackControl.push("active");
  });

  $(".stack-red").on("click", function(){
  $(".active").first().addClass("st");
  $(".active").first().removeClass("active");
  stack.stackControl.pop();
  });

  $('.queue-blue').on("click", function(){
  $(".qu").last().addClass("active-qu");
  $('.qu').last().removeClass("qu");
  queue.queueControl.push("active");
 });

  $(".queue-red").on("click", function(){
  $(".active-qu").last().addClass("qu");
  $(".active-qu").last().removeClass("active-qu");
  queue.queueControl.shift();
  });

});
