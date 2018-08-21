var queue = new QueueDataStructure();

$("#add-queue").click(function() {
    var val = $("#queue-input").val();
    if(queue.canEnqueue()) {
        $(".error-queue:last").hide();
        $("#delete-queue").prop('disabled', false);
        queue.enqueue(val);
        $(".queue-element:empty:last").text(val);
    } else {
        $("#add-queue").prop('disabled', true);
        $(".error-queue:first").show();
    }
    $("#queue-input").val('');
});

$("#delete-queue").click(function() {
    if(queue.isEmpty()) {
        $("#delete-queue").prop('disabled', true);
        $(".error-queue:last").show();
    } else {
        $(".error-queue:first").hide();
        $("#add-queue").prop('disabled', false);
        queue.dequeue();
        $('.queue-element').last().remove();
        $('.queue').prepend('<div class="queue-element"></div>');
    }
});