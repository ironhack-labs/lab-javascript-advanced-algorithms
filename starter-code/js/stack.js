stack = new StackDataStructure();

const stackRepresent = () => {
    const stackArr = stack.stackControl;
    for (var i = 0; i < stackArr.length; i++) {
        $($(".stack")[i]).addClass("stacked");
    }
}

const stackUnrepresent = () => {
    const stackArr = stack.stackControl;
    $($(".stack")[stackArr.length]).removeClass("stacked")
}


$(".add").on("click", function () {
    stack.push($("#stack-push").val());
    stackRepresent();
    $(".stacked").append(`<p>${$("#stack-push").val()}</p>`)
});

$(".take").on("click", function () {
    stack.pop();
    stackUnrepresent();
});
