// var queue = new QueueDataStructure();

// $('document').ready(function () {

//     $(".btn-add").click(function () {
//         // if ($("#newDataType").val() == "") {
//         //     alert("please add input")
//         // } else {

//         $('.empty-block:first').remove()
//         stack.pushtoQueue($("#newDataType").val())
//     });
//     // });

// $(".btn-remove").click(function () {
//     stack.unqueueFirst()

// });




// });



var queue = new StackDataStructure();

$('document').ready(function () {

    $(".btn-addQ").click(function () {

        if ($("#newDataType").val() == "") {
            alert("Please add input first")
            
        }
        else if ($('.empty-block').length > 0 && stack.array.length == 0) {
            $('.show-under').addClass("hidden");
            var newBox = $('<div>').addClass("block");
            $(".empty-block:last").after(newBox);
            $('.empty-block:first').remove();
            queue.pushOnArray($("#newDataType").val());
            newBox.html($("#newDataType").val());

        } else if ($('.empty-block').length == 0 && stack.array.length == 0) {
            $('.show-over').removeClass("hidden");
            $('.show-over').addClass("overflow");
            setTimeout(function () {
                alert("You have reached your limit. Remove data to continue");
            }, 500);
        } else {
            setTimeout(function () {
                alert("Please empty stack array before proceeding");
            }, 500);
        }
    });

    $(".btn-removeQ").click(function () {
        if ($('.block').length > 0 && $('.block').length <= 10 && stack.array.length == 0) {
            $('.show-over').addClass("hidden");
            var newEmpty = $('<div>').addClass("empty-block");
            $(".show-over").after(newEmpty);
            $('.block:last').remove();
            queue.removeFromArray();
        }
        else if ($('.block').length == 0 && stack.array.length == 0) {
            $('.show-under').removeClass("hidden");
            $('.show-under').addClass("overflow");
            setTimeout(function () {
                alert("You must have at least one Data Type Stored. Add data to continue");
            }, 500);
        } else {
            setTimeout(function () {
                alert("Please empty stack array before proceeding");
            }, 500);
        }

    }); 
});