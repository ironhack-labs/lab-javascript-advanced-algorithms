// New queue obj.
var queue = new QueueDataStructure();

// Add element to the queue
$("#add-queue").click(function() {

    // MISSING CHECK IF EMPTY INPUT !!!
    if($("#queue-input").val() != '') {
        var element = $("#queue-input").val();
        if(queue.canEnqueue()) {
            // Hide Queue Underflow warning
            $(".error-queue:last").hide();
            // Enable delete-queue button
            $("#delete-queue").prop('disabled', false);
            queue.enqueue(element);
            // Adds text to the last empty queue-element
            $(".queue-element:empty:last").text(element);
        } else {
            // Disable add-queue button
            $("#add-queue").prop('disabled', true);
            // Show Queue Overflow warning
            $(".error-queue:first").show();
        }
    } else {
        alert('Empty input');
    }
    
    // Empty input field
    $("#queue-input").val('');
});

// Delete element from the queue
$("#delete-queue").click(function() {
    if(queue.isEmpty()) {
        // Disable delete-queue button
        $("#delete-queue").prop('disabled', true);
        // Show Queue Underflow warning
        $(".error-queue:last").show();
    } else {
        // Hide Queue Overflow warning
        $(".error-queue:first").hide();
        // Enable add-queue button
        $("#add-queue").prop('disabled', false);
        queue.dequeue();
        // Remove last queue-element
        $('.queue-element').last().remove();
        // Add new blank queue element at the begining
        $('.queue').prepend('<div class="queue-element"></div>');
    }
});