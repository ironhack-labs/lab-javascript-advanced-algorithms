var myQueue = new QueueDataStructure();

var addToTheQueue = function() {
  myQueue.enqueue($("#queueUF .inputBox").attr("value"));
  queueFiller();
};

var removeFromTheQueue = function () {
  myQueue.dequeue();
  queueEmptier();
};

  var queueCounter = 0;

var queueFiller = function () {
  var currentStep = $(".queueStep")[queueCounter];
  $(currentStep).toggleClass("filledBox");
  // $(currentStep).attr("text", "$('#stackOF .inputBox').attr('value')");
  queueCounter += 1;
};

var queueEmptier = function () {
  queueCounter -= 1;
  var currentStep = $(".queueStep")[queueCounter];
  $(currentStep).toggleClass("filledBox");

};

function queueTrigger () {
  $("#queueUF").append("<div class='topBox'></div>");
  $("#queueUF").append("<div class='bottomBox'></div>");
  $("#queueUF .topBox").append("<div class='titles'>Queue</div>");
  $("#queueUF .topBox").append("<input class='inputBox' type='text' placeholder='Add element to the queue'>");
  $("#queueUF .topBox").append("<div class='addRemButtons'></div>");
  $("#queueUF .addRemButtons").append("<button class='addButton' onclick='addToTheQueue()'>ADD</button>");
  $("#queueUF .addRemButtons").append("<button class='remButton' onclick='removeFromTheQueue()'>TAKE</button>");
  for(var i=0;i<10;i++){
      $('#queueUF .bottomBox').append('<div class="queueStep" />');
  }
}

$(document).ready(function(){
  queueTrigger();
});
