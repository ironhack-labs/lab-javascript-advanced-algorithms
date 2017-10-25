// Queue Data Structure visualization
function initQueue() {
    var queue = new QueueDataStructure();

    function showQueue(queue) {
        var index = 0;
        for (index; index < queue.queueControl.length; index++) {
            var selector = '.queue-data-structure div:nth-child(' + (queue.MAX_SIZE - index) + ')';
            $(selector).addClass('in').text(queue.queueControl[index]);
        }

        for (index; index < queue.MAX_SIZE; index++) {
            var selector = '.queue-data-structure div:nth-child(' + (queue.MAX_SIZE - index) + ')';
            $(selector).removeClass('in').text('');
        }
    }

    $('.btn-queue-add').on('click', function() {
        var input = $('.queue-input');
        if (queue.canEnqueue()) {
            queue.enqueue(input.val());
            $('.queue-underflow').addClass('hidden');
            showQueue(queue);
        } else {
            $('.queue-overflow').removeClass('hidden');
        }
    });

    $('.btn-queue-take').on('click', function() {
        if (!queue.isEmpty()) {
            queue.dequeue();
            $('.queue-overflow').addClass('hidden');
            showQueue(queue);
        } else {
            $('.queue-underflow').removeClass('hidden');
        }
    });
}

$(document).ready(initQueue);
