
$(document).ready(function () {

  var queue = new QueueDataStructure();

  $('.addQ').click(function (e) {
    if ($('.inputQ').val() === "") {
      alert('Insert a number')
    } else {
      var valor = $('.inputQ').val(); 
      if (queue.enqueue(valor) === 'Queue Overflow') alert('Queue Overflow');
      rellenarPila();
      refreshInput()
    }
  });

  $('.takeQ').click(function () {
    if (queue.dequeue() === 'Queue Underflow') alert('Queue Underflow');
    rellenarPila();
    refreshInput()
  });

  function rellenarPila() {
    $(`.queue`).text("");
    queue.queueControl.forEach(function (element, index) {
      $(`.queue.${index}`).text(queue.queueControl[index]);
    });
  }

  function refreshInput() {
    $('.inputQ').val('');
  }

});