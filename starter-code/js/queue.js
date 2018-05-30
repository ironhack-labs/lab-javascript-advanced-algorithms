$(document).ready(function () {

    queue = new QueueDataStructure();

    for (i = 0; i < queue.MAX_SIZE; i++) { $("#queueEmptyList").append($("<li class='list-group-item'>" + "" + "</li>")); }

    $("#queue .take").click(function () {

        $("#queueList").empty();

        var popped = queue.dequeue($("#queue input").val());

        if (popped != "Queue Underflow") {
            queue.queueControl.forEach(element => {
                $("#queueList").append($("<li class='list-group-item'>" + element + "</li>"));
            });
        }
        else {
            $("#queueList").append($("<li class='list-group-item'>" + popped + "</li>"));
        }


    });

    $("#queue .add").click(function () {

        $("#queueList").empty();

        var elementArray = queue.enqueue($("#queue input").val());

        if (Array.isArray(elementArray)) {
            elementArray.forEach(element => {
                $("#queueList").append($("<li class='list-group-item'>" + element + "</li>"));
            });
        }
        else {
            $("#queueList").append($("<li class='list-group-item'>" + "Queue Overflow" + "</li>"));
        }

    });



});




