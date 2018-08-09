$(document).ready(function() {
    var queue = new Queue();

    $('#queue-button-add').on('click', function() {
        var input = $('#queue-input').val();
        console.log(input);
        if (input === '') return;
        $('#queue-input').val('');

        if ($('#queue-underflow').hasClass('active')) {
            $('#queue-underflow').removeClass('active');
            $('#queue-underflow').css('background-color', '#005b96');
        }

        if (queue.canAddMore()) {
            queue.add(input);
            refreshQueueView(queue);
        } else {
            $('.queue-overflow').addClass('active');
            $('.queue-overflow').html('Stack Overflow');
        }
    });

    $('#queue-button-take').on('click', function() {
        if (queue.canTake()) {
            queue.take();
            cleanQueue(queue);
        } else {
            $('#queue-underflow').addClass('active');
            $('#queue-underflow').html('Queue Underflow');
            $('#queue-underflow').css('background-color', '#f69c93');
        }
    });
});

function refreshQueueView(queue) {
    var divArray = Array.from($('.queue-element'));
    console.log(queue.queueArray);

    for (var i = 0; i <= queue.queueArray.length - 1; i++) {
        $(divArray[i]).addClass('occupied');
        $(divArray[i]).html(queue.queueArray[i]);
    }
}

function cleanQueue(queue) {
    var divArray = Array.from($('.queue-element'));
    console.log(queue.queueArray);
    var index;
    for (var i = 0; i < divArray.length; i++) {
        if ($(divArray[i]).hasClass('occupied')) index = i;
    }

    $(divArray[index]).removeClass('occupied');
    $(divArray[index]).html('');
}
