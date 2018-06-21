$(document).ready(function () {

  let queue_ = new QueueDataStructure();
  let queueOverflow = false;
  let queueUnderflow = false;

  let updateQueue = function () {
    $('.queue').removeClass('box-on');
    $('.queue').html('');
    queue_.queueControl.forEach(function (e, i) {
      $('.queue:nth-child(' + String(queue_.MAX_SIZE + 1 - i) + ')').addClass('box-on');
      $('.queue:nth-child(' + String(queue_.MAX_SIZE + 1 - i) + ')').html(e);
    });

    if (queueOverflow)
      $('#overflow-box-queue').removeClass('hide');
    else
      $('#overflow-box-queue').addClass('hide');

    if (queueUnderflow)
      $('#underflow-box-queue').removeClass('hide');
    else
      $('#underflow-box-queue').addClass('hide');
  }

  $('#add-btn-queue').click(function () {
    if (queue_.canEnqueue()) {
      queue_.enqueue($('#input-text-queue').val());
      queueUnderflow = false;
      $('#pop-marker-queue').css('display', 'none');
    } else {
      queueOverflow = true;
    }
    updateQueue();
  });

  $('#take-btn-queue').click(function () {
    if (queue_.isEmpty()) {
      queueUnderflow = true;
      $('#pop-marker-queue').css('display', 'none');
    } else {
      $('#pop-marker-queue').html(queue_.dequeue());
      $('#pop-marker-queue').css('display', 'flex');
      queueOverflow = false;

    }
    updateQueue();
  });

  updateQueue();
});

