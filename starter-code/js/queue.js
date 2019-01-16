let queueIsnt = new QueueDataStructure();
$(document).ready(function () {

    function render() {
        $('#queue li:not(#underQ, #overQ)').removeClass('active').text('');
        queueIsnt.queueControl.forEach((element, idx) => {

            $('#' + (idx + 9)).text(element).addClass('active');
            $('#underQ').removeClass('list-group-item bg-danger').text('Stack Underflow');
        });
    }

    total = 9;
    $('#underQ').addClass('bg-danger').text('Queue Underflow').css('color', 'white');

    $('.btnAddQ').click(function () {

        if (queueIsnt.canEnqueue()) {
            let item = $('#inputQ').val();
            queueIsnt.enqueue(item);
            render();

        } else {
            $('#overQ').addClass('list-group-item bg-danger').text('Stack Overflow').css('color', 'white');
        }

    });

    $('.btnTakeQ').click(function () {
        if (queueIsnt.dequeue() === 'Queue Underflow') {
            $('#underQ').addClass('list-group-item bg-danger').text('Queue Underflow').css('color', 'white');
        }
        render();
        $('#overQ').removeClass('list-group-item bg-danger').text('').css('color', 'white');
    });
});