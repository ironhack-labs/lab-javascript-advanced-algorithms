$(document).ready(function(){
var queue = new QueueDataStructure();
var id = queue.MAX_SIZE;

  $('#add-queue').click(function(){
    var response = queue.enqueue(id);
    $("div.queue:nth-child(" + id + ")").css('background-color','blue');
    id--;
    console.log(response);
  });

  $('#take-queue').click(function(){
    id++;
    $("div.queue:nth-child(" + id + ")").css('background-color','#e1e5ed');
    var response = queue.dequeue();
    console.log(response);
  });
});
