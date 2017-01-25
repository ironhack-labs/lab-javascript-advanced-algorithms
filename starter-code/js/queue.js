function queueTrigger () {
  $("#queueUF").append("<div class='topBox'></div>");
  $("#queueUF").append("<div class='bottomBox'></div>");
  $("#queueUF .topBox").append("<div class='titles'>Queue</div>");
  $("#queueUF .topBox").append("<input class='inputBox' type='text' placeholder='Add element to the queue'>");
  $("#queueUF .topBox").append("<div class='addRemButtons'></div>");
  $("#queueUF .addRemButtons").append("<button class='addButton'>ADD</button>");
  $("#queueUF .addRemButtons").append("<button class='remButton'>TAKE</button>");
  for(var i=0;i<10;i++){
      $('#queueUF .bottomBox').append('<div class="queueStep" />');
  }
}

$(document).ready(function(){
  queueTrigger();
});
