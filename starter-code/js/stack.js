var stack = new StackDataStructure();
var stackContainer = document.getElementById("stack");

function insertStackGaps(container) {
    var gap = '<div class="gap empty"></div>';
    for(var i = 0; i < stack.MAX_SIZE; i++) {
        $(container).find(".gaps").append(gap);
    }
}

function insertStackInDOM(value, position) {
    var newStack = '<span>' + value + '</span>';
    var gap = $('#stack .gaps').children()[position];
    $(gap).append(newStack);
    $(gap).removeClass('empty');
}

function cleanInput() {
    $('#stack input').val('');
}

$(document).ready(function(){
    insertStackGaps(stackContainer);
})

$('#stack .btn-add').on('click', function() {
    var val = $(this).siblings('input').val();
    var pos = stack.stackControl.length;
    if(val!== "") {
        console.log(stack.push(val));
        insertStackInDOM(val, pos);
        cleanInput();
    }
})