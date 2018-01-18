$(document).ready(function () {
      var myQueue = new QueueDataStructure();
      $('.q-add').click(function () {
            var value = $('.q-item-to-add').val();
            $('.q-item-to-add').val('');
            if (!myQueue.canEnqueue()) {
                  $('.queued').css({'width':'calc(100% / 9)','transition':'none'});
                  $('.queued-overflow').addClass('visible').html('<span>Queue Overflow</span>');
            } else {
                  if ($('.queued:last-child').hasClass('queued-underflow')) {
                        $('.queued:last-child').removeClass('queued-underflow btn-danger').html('');
                  }
                  myQueue.queueControl.unshift(value);
                  var index = (myQueue.MAX_SIZE - myQueue.queueControl.length) + 2;
                  $('.queued:nth-child(' + index + ')').addClass('added').html('<span>' + value + '</span>');
                  
            }
      }); 
      $('.q-take').click(function () {
            if (!myQueue.isEmpty()) {
                  myQueue.queueControl.pop();
                  $('.queued:last-child').removeClass('queued-underflow btn-danger');
                  $('.queued-overflow').removeClass('visible').html('');
                  $('.queued').css({'width':'calc(100% / 8)','transition':'all .3s linear'});
                  var index = (myQueue.MAX_SIZE - myQueue.queueControl.length) + 1;
                  $('.queued:nth-child(' + index + ')').removeClass('added').text('');
            } else {            
                  $('.queued:last-child').addClass('queued-underflow btn-danger').html('<span>Queue Underflow</span>');
            }
      });
});