var queueDataContainer = $(".queue-data-container");

function addQDivs (arg) {
  for (var i = 0; i < arg; i++) {
    $(queueDataContainer).append('<div class="queue-data-element"></div>');
  }
}

$(document).ready(function(){
  queueDataStructure = new QueueDataStructure(8);
  addQDivs(queueDataStructure.MAX_SIZE);

  $('.btn-add-queue').click(function () {
    console.log("He entrado");
  });

  $('.btn-take-queue').click(function () {
    console.log("He entrado");
  });

});