stack = new StackDataStructure();

const stackRepresent = () => {
    const stackArr = stack.stackControl;
    for (var i = 0; i < stackArr.length; i++) {
        $($(".stack")[i]).addClass("stacked");

    }
}

const stackUnrepresent = () => {
    $($(".stacked")[stack.stackControl.length]).removeClass("stacked")
}


$(".add").on("click", function () {
    stack.push($("#stack-push").val())
    stackRepresent();
    $(".stacked:last").text(`${$("#stack-push").val()}`)
    $("#stack-push").val("")
});

$(".take").on("click", function () {
    stack.pop();
    $(".stacked:last").text(`${$("#stack-push").html()}`);
    stackUnrepresent();
});
