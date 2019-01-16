$(document).ready(function () {
    let stackIsnt = new StackDataStructure();
    let total = 0;

    if (total === 0) {
        $('#under').addClass('bg-danger').text('Stack Underflow');
        $('#over').removeClass('list-group-item');
    }


    $('.btnAdd').click(function () {
        total++;
        if (total < 8) {

            let item = $('#inputS').val();
            stackIsnt.push(item);

            $('#' + total).text(item);
            $('#' + total).addClass('active');
            $('#under').removeClass('list-group-item bg-danger').text('Stack Underflow');
            console.log(total);
        } else {
            $('#over').addClass('list-group-item bg-danger').text('Stack Overflow').css('color', 'white');
            total--;
        }
    });

    $('.btnTake').click(function () {
        if (total === 1) {
            $('#' + total).text("").removeClass('active');
            $('#under').addClass('list-group-item bg-danger').text('Under Overflow').css('color', 'white');
            total--;
        } else if (total !== 0) {
            $('#' + total).text("").removeClass('active');
            total--;
            console.log(total);
        } else {
            $('#under').addClass('list-group-item bg-danger').text('Under Overflow').css('color', 'white');
        }

    });

});