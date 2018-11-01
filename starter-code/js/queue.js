var queue = new QueueDataStructure();
$(document).ready(function() {
  var queue = new QueueDataStructure();
  var queueStructure = "";
  for (var i = queue.MAX_SIZE - 1; i >= 0; i--) {
    queueStructure += `<div class="array arrayContentQueue${i}"></div>`;
  }

  $(".queueStructure").html(queueStructure);
  function draw() {
    for (var j = 0; j < queue.MAX_SIZE; j++) {
      $(`.arrayContentQueue` + j).empty();
      $(`.arrayContentQueue` + j).text(queue.queueControl[j]);
    }
  }

  $(".addQueue").click(function() {
    if(!queue.canEnqueue())
      alert(queue.enqueue())
    queue.enqueue($(".inputQueue").val());
    draw();
  });

  $(".removeQueue").click(function() {
    queue.dequeue();
    draw();
  });

});
