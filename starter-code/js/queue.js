var queue;

$("document").ready(function() {
    console.log("queue ready");

    queue = new QueueDataStructure();
    queue.MAX_SIZE = 8;

    $("#queue button.add").click(function() {
        console.log("Add to queue");
        var input = $("#queue input");
        if ($.isNumeric(input.val())) {
            if (queue.canEnqueue()) {
                queue.enqueue(parseInt(input.val()));
                updateQueueRepresentation();
                $("#queue .underflow").addClass("hidden");
            } else {
                $("#queue .overflow").removeClass("hidden");
            }
        } else {
            input.val("");
        }
    });

    $("#queue button.delete").click(function() {
        console.log("remove from queue");
        if (!queue.isEmpty()) {
            $("#queue .overflow").addClass("hidden");
            queue.dequeue()
            updateQueueRepresentation();
        } else {
            $("#queue .underflow").removeClass("hidden");
        }
    });

    
    function updateQueueRepresentation() {
        for (var i = 0; i < queue.queueControl.length; i++) {
            var selector = "#queue-representation div:nth-child(" + (8 - i) + ")";
            $(selector).addClass("filled");
            $(selector).html(queue.queueControl[i]);
        };
      
        for (; i < 8; i++) {
            var selector = "#queue-representation div:nth-child(" + (8 - i) + ")";
            $(selector).removeClass("filled");
            $(selector).html("");
        }
    }
})