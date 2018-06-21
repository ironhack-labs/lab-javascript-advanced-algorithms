

$(document).ready(function(){
    var newQueue = new QueueDataStructure();

    $('#add-queue').on('click', function () {
        if (!newQueue.canEnqueue()) {
            $('.error-queue:first').css("display", "block");
        } else {
        var input = $('#queue-input').val();
        var left = $('.queue-element:first');
        var qLength = newQueue.queue.length;
        var fullDiv = $('.queue-element-full');
        if (qLength === 0) {
            left.text(input);
            left.addClass('queue-element-full');
            newQueue.enqueue(input);
            $('#queue-input').val('');
        } else {

            $('.queue-element-full').each(function (index, value){
                var text = newQueue.queue[index];
                $(this).next().text(text).addClass('queue-element-full')
              });

            left.text(input);
            newQueue.enqueue(input);
            $('#queue-input').val('');
        }}
       
        
    })

    $('#delete-queue').on('click', function () {

        if (newQueue.isEmpty()) {
            $('.error-queue:last').css("display", "block");
        } else {
        newQueue.dequeue();
        var last = $('.queue-element-full:last');
        var storeRemoved = last.text();
        last.text('');
        last.removeClass('queue-element-full');
        var removed = $('#removed_queue ul');
        removed.append('<li>' + storeRemoved + '</li>');

        }
    })

})
