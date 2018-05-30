$(document).ready(function () {

    stack = new StackDataStructure();

    for (i = 0; i < stack.MAX_SIZE; i++) { $("#stackEmptyList").append($("<li class='list-group-item'>" + "" + "</li>")); }

    $("#stack .take").click(function () {

        $("#stackList").empty();

        var popped = stack.pop($("#stack input").val());

        if (popped != "Stack Underflow") {
            stack.stackControl.forEach(element => {
                $("#stackList").append($("<li class='list-group-item'>" + element + "</li>"));
            });
        }
        else {
            $("#stackList").append($("<li class='list-group-item'>" + popped + "</li>"));
        }


    });

    $("#stack .add").click(function () {

        $("#stackList").empty();

        var elementArray = stack.push($("#stack input").val());

        if (Array.isArray(elementArray)) {
            elementArray.forEach(element => {
                $("#stackList").append($("<li class='list-group-item'>" + element + "</li>"));
            });
        }
        else {
            $("#stackList").append($("<li class='list-group-item'>" + "Stack Overflow" + "</li>"));
        }

    });



});




