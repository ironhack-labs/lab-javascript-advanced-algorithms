$(document).ready(function () {

    var jeje = new QueueDataStructure();

    $(".btn-queue-add").on("click", function () {
        var valuequeue = $('.input-queue').val();
        $('.queue.e' + 1).removeClass("overflow").addClass("queue-gray");
        console.log(jeje);
        if (jeje.canEnqueue()) {
            jeje.queueControl.unshift(valuequeue);
            var indexqueue = jeje.queueControl.length;
            $('.queue.e' + indexqueue).removeClass('queue-gray').addClass('queue-blue').html('<p class="l" >' + valuequeue + ' </p>');
            if (indexqueue === jeje.MAX_SIZE) {
                $('.queue.e' + jeje.MAX_SIZE).removeClass('queue-blue').addClass('overflow').text('QUEUE OVERFLOW');
            }
        }
    });
    $('.btn-queue-remove').click(function () {
        if (!jeje.isEmpty()) {
            var indexqueue = jeje.queueControl.length;
            $('.queue.e' + indexqueue).removeClass(" overflow queue-blue").addClass('queue-gray').text('');
            jeje.queueControl.shift();
            // var indexqueue=jeje.MAX_SIZE-jeje.queueControl.length;
            if (indexqueue === 1) {
                $('.queue.e' + indexqueue).removeClass("queue-gray").addClass("overflow").text("QUEUE-UNDERFLOW");
                indexqueue = jeje.MAX_SIZE;
            }
        }


    })
});
    //     $(".queue-gray").first().removeClass("queue-gray").addClass("queue-blue");
    // });

    // $(".btn-queue-remove").on("click", function () {

    //     jeje.dequeue($(".input-queue").val());

    //     $('.queue-blue').first().removeClass("queue-blue").addClass("queue-gray");
    //     console.log(jeje)













