document.addEventListener('DOMContentLoaded', function () {

  var myQueue = new QueueDataStructure();
  var blockedAddQueue = false;
  var blockedTakeQueue = false;

  for (var i = 0; i < myQueue.MAX_SIZE; i++) {
    var divQueue = document.createElement('div');
    divQueue.classList.add('grey-queue');
    $('#queue-div-container').append(divQueue)
  }

  $('#queue-add').click(function () {
    var addValueQueue = $('#input-queue').val();
    if (myQueue.canEnqueue()) {
      myQueue.enqueue(addValueQueue);
      containerQueueArray(myQueue.queueControl);
      blockedAddQueue = false;
    } else if (myQueue.canEnqueue() === false && blockedAddQueue === false) {
      var queueOverflowBox = document.createElement("div");
      queueOverflowBox.setAttribute("class", "alert-queue");
      queueOverflowBox.textContent = "Queue Overflow";
      $("#queue-div-container").append(queueOverflowBox);
      blockedAddQueue = true;
    }
  });

  $('#queue-take').click(function () {
    if (myQueue.isEmpty() === false) {
      myQueue.dequeue();
      containerQueueArray(myQueue.queueControl);
      blockedTakeQueue = false;
    } else if (myQueue.isEmpty() && blockedTakeQueue === false) {
      var queueUnderflowBox = document.createElement("div");
      queueUnderflowBox.setAttribute("class", "alert-queue");
      queueUnderflowBox.textContent = "Queue Underflow";
      $("#queue-div-container").last().prepend(queueUnderflowBox);
      blockedTakeQueue = true;
    }
  });

  function containerQueueArray(array) {
    $('#queue-div-container').empty();
    for (var i = 0; i <= myQueue.MAX_SIZE - 1; i++) {
      var divCreated = document.createElement('div');
      if (array[i] === undefined) {
        divCreated.classList.add('grey-queue');
        $('#queue-div-container').append(divCreated)
      } else {
        divCreated.classList.add('blue-queue');
        divCreated.textContent = array[i];
        $('#queue-div-container').append(divCreated);
      }
    }
  };
});
