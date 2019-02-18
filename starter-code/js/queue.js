var queueDataContainer = $(".queue-data-container");
var qOverflow = '<div class="queue-overflow">O<br>v<br>e<br>r<br>f<br>l<br>o<br>w</div>';
var qUnderflow = '<div class="queue-underflow">U<br>n<br>d<br>e<br>r<br>f<br>l<br>o<br>w<br></div>';
var inputBot = document.getElementsByClassName("input-bottom");

function addQDivs (arg) {
  for (var i = 0; i < arg; i++) {
    $(queueDataContainer).append('<div class="queue-data-element"></div>');
  }
}

function addQueue (obj) {
  if(obj.canEnqueue() === false) {
    $(queueDataContainer).prepend(qOverflow)
  }
  else {
    var inputVal = inputBot[0].value
    var queueSlots = document.getElementsByClassName("queue-data-element");
    var arrQSlots = [].slice.call(queueSlots);
    $(arrQSlots[arrQSlots.length-1]).toggleClass("fill-queue-element");
    $(arrQSlots[arrQSlots.length-1]).toggleClass("queue-data-element");
    $(arrQSlots[arrQSlots.length-1]).html(inputVal);
    obj.queueControl.push(inputVal)
  }
}

function takeQueue (obj) {
  if(obj.isEmpty() === true) {
    $(queueDataContainer).append(qUnderflow);
  }
  else {
    var queueSlots = document.getElementsByClassName("fill-queue-element");
    var arrQSlots = [].slice.call(queueSlots);
    var inputVal = $(arrQSlots[0]).html()
    obj.queueControl.shift(inputVal)
    $(arrQSlots[0]).toggleClass("fill-queue-element");
    $(arrQSlots[0]).toggleClass("queue-data-element");
    $(arrQSlots[0]).html("");
  }
}

$(document).ready(function(){
  queueDataStructure = new QueueDataStructure(15);
  addQDivs(queueDataStructure.MAX_SIZE);

  $('.btn-add-queue').click(function () {
    addQueue (queueDataStructure);
  });

  $('.btn-take-queue').click(function () {
    takeQueue (queueDataStructure);
  });

});