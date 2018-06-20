$(document).ready(function () {
    var newstack = new StackDataStructure();
    newstack.MAX_SIZE = 8;
    var index = 9;
    

    $('.addS').on('click', function () {
        var input = document.getElementById('entradaS').value;
        if (input.length == 0) {
            alert("Please enter a valid input!")
        } else {
            index--;
            $('.colM:nth-child(' + index + ')').text(input);
            $('.colM:nth-child(' + index + ')').css({backgroundColor:'pink'});
            var fullornot = newstack.push(input);
            if (fullornot == 'Stack Overflow') {
                alert('Stack Overflow!')
            }
            document.getElementById('entradaS').value = "";
        }
    })
    $('.takeS').on('click', function () {
        var emptyornot = newstack.pop();
        if (emptyornot == 'Stack Underflow') {
            alert('Stack Underflow!')
        } else {
            $('.colM:nth-child(' + index + ')').text("");
            $('.colM:nth-child(' + index + ')').css({backgroundColor:'lightgray'});
            index++;
        }
    })
})