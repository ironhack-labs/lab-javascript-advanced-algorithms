$(document).ready(function () {
    var newqueue = new QueueDataStructure();
    newqueue.MAX_SIZE = 8;
    var index = 0;

    $('.addQ').on('click', function () {
        var input = document.getElementById('entradaQ').value;
        if (input.length == 0) {
            alert("Please enter a valid input!")
        } else {
            index++;
            var fullornot = newqueue.enqueue(input);
            if (fullornot == 'Queue Overflow') {
                alert('Queue Overflow!')
            }else{
                for (i=index;i>0;i--){
                    $('.rowM:nth-child(' + i + ')').text(newqueue.queueControl[i-1]);
                    $('.rowM:nth-child(' + i + ')').css({backgroundColor:'pink'});
                }
            }
            document.getElementById('entradaQ').value = "";
        }
    })
    $('.takeQ').on('click', function () {
        var emptyornot = newqueue.dequeue();
        if (emptyornot == 'Queue Underflow') {
            alert('Queue Underflow!')
        } else {
            $('.rowM:nth-child(' + index + ')').text("");
            $('.rowM:nth-child(' + index + ')').css({backgroundColor:'lightgray'})
            index--;
        }
    })
})