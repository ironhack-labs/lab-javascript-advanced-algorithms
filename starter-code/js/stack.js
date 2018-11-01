$(function () {
    var numElemen = $('.elemt').length;
    var take=0;
    myStack = new StackDataStructure();
    $('.btn-addStack').on('click', function () {
        add();
    });
    $('.btn-takeStack').on('click', function () {
        takeElem();
    });

    function add() {

        var element = myStack.push($('#stackIn').val());
       
        if (typeof (element) === "object") {
            element = element[0];
        }
        if (element == "Stack Overflow") {
            $('.overflow').text(element);
            $('.btn-addStack').off('click');
        } else {
            $(`.elemt:eq(${numElemen - 1})`).text(element);

        }
        numElemen--;
    };

    function takeElem() {
        var element = myStack.push($('#stackIn').val());
        if (typeof (element) === "object") {
            element = element[0];
           
        }
        if (element == "Stack Underflow") {
            $('.underflow').text(element);
            $('.btn-addStack').off('click');
        } else {
            $('.overflow').text(" ");
            $(`.elemt:eq(${take})`).text(" ");

        }
        take++;
    }





});

