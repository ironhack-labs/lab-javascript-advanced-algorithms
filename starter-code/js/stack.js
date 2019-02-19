var stack = new StackDataStructure();

$('document').ready(function () {

    $(".btn-add").click(function () {

        if ($("#newDataType").val() == "") {
            alert("Please add input first")
            
        }
        else if ($('.empty-block').length > 0 && queue.array.length == 0) {
            $('.show-under').addClass("hidden");
            var newBox = $('<div>').addClass("block");
            $(".empty-block:last").after(newBox);
            $('.empty-block:first').remove();
            stack.pushOnArray($("#newDataType").val());
            newBox.html($("#newDataType").val());

        } else if ($('.empty-block').length == 0 && queue.array.length == 0) {
            $('.show-over').removeClass("hidden");
            $('.show-over').addClass("overflow");
            setTimeout(function () {
                alert("You have reached your limit. Remove data to continue");
            }, 500);
        } else {
            setTimeout(function () {
                alert("Please empty queue array before proceeding");
            }, 500);
        }
    });

    $(".btn-remove").click(function () {
        if ($('.block').length > 0 && $('.block').length <= 10 && queue.array.length == 0) {
            $('.show-over').addClass("hidden");
            var newEmpty = $('<div>').addClass("empty-block");
            $(".show-under").before(newEmpty);
            $('.block:first').remove();
            stack.removeFromArray();
        }
        else if ($('.block').length == 0 && queue.array.length == 0) {
            $('.show-under').removeClass("hidden");
            $('.show-under').addClass("overflow");
            setTimeout(function () {
                alert("You must have at least one Data Type Stored. Add data to continue");
            }, 500);

        } else {
            setTimeout(function () {
                alert("Please empty queue array before proceeding");
            }, 500);
        }

    });
});
