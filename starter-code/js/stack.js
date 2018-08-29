$(document).ready(function () {
    var stack = new StackDataStructure();

    $("#size-button").click(function () {
        $(".inputs").children().each(function () {
            $(this).toggleClass("d-none");
        })
        stack.MAX_SIZE = parseInt($("#max-size").val());
        var stackSlotsHtml = "";
        for (var i = 0; i < stack.MAX_SIZE; i++) {
            stackSlotsHtml += '<div class="my-1 border border-dark bg-light"><span>...</span></div>'
        }
        $("#stacks-container").html(stackSlotsHtml);
    });



    function updateSlots() {
        var spanArr = $("#stacks-container > div").children();
        if (stack.canPush()) {
            for (var i = 0; i < spanArr.length; i++) {
                if (stack.stackControl.length > i) {
                    spanArr[i].innerText = stack.stackControl[i];
                } else {
                    spanArr[i].innerText = "...";
                }

            }
        } else {
            spanArr[spanArr.length - 1].innerText = "Stack Overflow!!";
        }
    }

    function retrieveRemoved(e) {
        $("#slotTaken").children()[0].innerText = e;
    }

    $("#add").click(function () {
        stack.push($("#push").val());
        updateSlots();
        $("#slotTaken").children()[0].innerText = "...";
    });


    $("#take").click(function () {
        var print = stack.pop();
        retrieveRemoved(print)
        updateSlots();
    })
});
