var queue = new QueueDataStructure();

$('document').ready(function () {

    $(".btn-add").click(function () {
        if ($("#newDataType").val() == "") {
            alert("please add input")
        } else {
            // var newBox = $('<div>').addClass("block")
            // $(".block-stack").append(newBox);
            $('.empty-block:first').remove()
            stack.pushtoQueue($("#newDataType").val())
            // newBox.html($("#newDataType").val())
        }
    });

    $(".btn-remove").click(function () {
        stack.removeFromArray()
      
    });




});
