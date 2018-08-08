var stack = new StackDataStructure
$(".stack").addClass("empty");

$('.take').on('click', function () {
    $('.add').css("pointer-events", "auto");
    $(".stackover").remove();
    var stacks = $(".stack:not(.empty)");
    if (stack.isEmpty()) {
        $(this).css("pointer-events", "none");
        $('.stacks').append('<div class="stackunder">Stack Underflow</div>');
    } else {
        stack.pop();
        stacks.first().text("");
        stacks.first().toggleClass("empty")
    }
});

$('.add').on('click', function () {
    $('.take').css("pointer-events", "auto");
    $(".stackunder").remove();
    var input = $("#input").val();

    var stacks = $(".stack.empty");
    if (stack.canPush()) {
        stack.push(input);
        stacks.last().text(input);
        stacks.last().toggleClass("empty")
    } else {
        $(this).css("pointer-events", "none");
        $('.stacks').prepend('<div class="stackover">Stack Overflow</div>');
    }
});