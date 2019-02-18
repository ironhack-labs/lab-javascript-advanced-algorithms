var stack = new StackDataStructure();

$('document').ready(function () {

    $(".btn-add").click(function () {

        if ($("#newDataType").val() == "") {
            alert("Please add input first")
            
        }
        else if ($('.block').length < 10) {
            $('.show-under').addClass("hidden");
            var newBox = $('<div>').addClass("block")
            $(".block-stack").append(newBox);
            $('.empty-block:first').remove()
            stack.pushOnArray($("#newDataType").val())
            newBox.html($("#newDataType").val())

        } else if ($('.block').length == 10) {
            $('.show-over').removeClass("hidden")
            $('.show-over').addClass("overflow")
            setTimeout(function () {
                alert("You have reached your limit. Remove data to continue");
            }, 500);
        }
    });

    $(".btn-remove").click(function () {

        if ($('.block').length == 10) {
            $('.show-over').addClass("hidden");
            var newEmpty = $('<div>').addClass("empty-block");
            $(".block-stack").append(newEmpty);
            $('.block:first').remove();
            stack.removeFromArray();
        }
        else if ($('.block').length > 0 && $('.block').length < 10) {
            var newEmpty = $('<div>').addClass("empty-block");
            $(".block-stack").append(newEmpty);
            $('.block:first').remove();
            stack.removeFromArray();

        }
        else if ($('.block').length == 0) {
            var Stackunderflow = $('<div>').addClass("show-under overflow")
            $('.block-stack:last').append(Stackunderflow)
            Stackunderflow.html("Stack Underflow")
            setTimeout(function () {
                alert("You must have at least one Data Type Stored. Add data to continue");
            }, 500);

        };

    });
});

