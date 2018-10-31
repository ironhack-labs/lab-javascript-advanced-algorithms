$(function () {
    myStack = new StackDataStructure();
    $('.btn-addStack').on('click', function () {
        add();
    });
    $('.btn-addStack').on('click', function () {
        take();
    })
});

function add(){
    var element = myStack.push($('#stackIn').val());
        if (typeof (element) === "object") {
            element = element[0];
        }
        if (element == "Stack Overflow") {
            $('.overflow').text(element);
            $('.btn-addStack').off('click')
        } else {
            $('.elemt').each(function () {
                if ($(this).text() === "") {
                    $(this).text(element);

                    exit;
                }
            })
        }
}