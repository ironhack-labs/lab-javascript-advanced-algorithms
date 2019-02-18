var queueDataContainer = $(".queue-data-container");
var qOverflow = '<div class="queue-overflow">O<br>v<br>e<br>r<br>f<br>l<br>o<br>w</div>';
var qUnderflow = '<div class="queue-underflow">U<br>n<br>d<br>e<br>r<br>f<br>l<br>o<br>w<br></div>';
var inputTop = document.getElementsByClassName("input-bottom");

function addQDivs (arg) {
  for (var i = 0; i < arg; i++) {
    $(queueDataContainer).append('<div class="queue-data-element"></div>');
  }
}

$(document).ready(function(){
  queueDataStructure = new QueueDataStructure(9);
  addQDivs(queueDataStructure.MAX_SIZE);

  $('.btn-add-queue').click(function () {
    console.log("He entrado");
  });

  $('.btn-take-queue').click(function () {
    console.log("He entrado");
  });

});