let queueData = new QueueDataStructure();

$(document).ready(function () {
    let index = 1;

    //boton de añadir


    $('#add-queue').click(function () {
        let queueValue = $("#queue-input").val();

        if (queueData.canEnqueue()) {

            queueData.enqueue(queueValue);
            $(".queue-element:nth-child(" + index + ")").text(queueData.queueControl[0]);
            $(".queue-element:nth-child(" + index + ")").addClass("addedelement");
            index++
            $("#queue-container > .under").css("display", "none");

        } else {
            $("#queue-container > .over").css("display", "block");
        }

        $("#queue-input").val("");



    });

    //boton de  uitar

    $('#delete-queue').click(function () {

        if (queueData.isEmpty()) {

            $("#queue-container > .under").css("display", "block");

        } else {
            queueData.dequeue();
            index--
            $(".queue-element:nth-child(" + index + ")").text("");
            $(".queue-element:nth-child(" + index + ")").removeClass("addedelement");
            $("#queue-container > .over").css("display", "none");

        }

    });

});