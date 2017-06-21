$(document).ready(function(){
  var queue = new QueueDataStructure();
  var upQueue = 1;
  var downQueue = queue.MAX_SIZE;

  $('#add-queue').click(function(){
    var response = queue.enqueue(upQueue);
    $("div.queue:nth-child(" + upQueue + ")").css('background-color','blue');
    upQueue++;
    console.log(response);
    if(upQueue > 11){
      upQueue = 1;
    }
  });

  $('#take-queue').click(function(){
    $("div.queue:nth-child(" + downQueue + ")").css('background-color','#e1e5ed');
    downQueue--;
    var response = queue.dequeue();
    console.log(response);
    if(downQueue < 0){
      upQueue = queue.MAX_SIZE;
    }
  });
});
