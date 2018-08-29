$(document).ready(function () {
    var queue = new QueueDataStructure();

    $("#size-button-q").click(function () {
        $(".inputs-q").children().each(function () {
            $(this).toggleClass("d-none");
        })
        queue.MAX_SIZE = parseInt($("#max-size-q").val());
        var stackSlotsHtml = "";
        for (var i = 0; i < queue.MAX_SIZE; i++) {
            stackSlotsHtml += '<div class="my-1 border border-dark bg-light"><span>...</span></div>'
        }
        $("#stacks-container-q").html(stackSlotsHtml);
    });



    function updateSlots() {
        var spanArr = $("#stacks-container-q > div").children();
        if (queue.canEnqueue()) {
            for (var i = 0; i < spanArr.length; i++) {
                if (queue.queueControl.length > i) {
                    spanArr[i].innerText = queue.queueControl[i];
                } else {
                    spanArr[i].innerText = "...";
                }

            }
        } else {
            spanArr[spanArr.length - 1].innerText = "Queue Overflow!!";
        }
    }

    function retrieveRemoved(e) {
        $("#slotTaken-q").children()[0].innerText = e;
    }

    $("#add-q").click(function () {
        queue.enqueue($("#push-q").val());
        updateSlots();
        $("#slotTaken").children()[0].innerText = "...";
    });


    $("#take-q").click(function () {
        var print = queue.dequeue();
        retrieveRemoved(print)
        updateSlots();
    })
});