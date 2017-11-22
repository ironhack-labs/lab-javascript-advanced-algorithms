function Queue() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
}

Queue.prototype.isEmpty = function () {
    if (this.queueControl.length === 0) {
        return true;
    } else {
        return false;
    }
}

Queue.prototype.canPush = function () {
    if (this.queueControl.length === this.MAX_SIZE) {
        return false;
    } else {
        return true;
    }
}

Queue.prototype.divFlow = function (text) {
    return '<div id="limit" class="col-sm-2 element horiz limit">' + text + '</div>';
}

Queue.prototype.delDivFlow = function (btn) {
    if (btn === 'take') {
        $('#queue #elements #limit:last').remove();
        $('#queue .take').removeClass('disabled').css('pointer-events', 'auto');
    } else if (btn === 'add') {
        $('#queue #elements #limit:first').remove();
        $('#queue .add').removeClass('disabled').css('pointer-events', 'auto');
    }
}

Queue.prototype.runQueueControl = function () {
    this.queueControl.forEach(function (value, index) {
        var child = 8 - index;
        $('#queue #elements .row').children(':nth-child(' + child + ')').addClass('in').html(value);
    });
}

Queue.prototype.checkqueueControl = function (btn) {
    if (btn === 'take') {
        $('#queue #elements .row').children().removeClass('in').html('');
        this.runQueueControl();
    } else {
        this.runQueueControl();
    };
};

Queue.prototype.push = function (element) {
    if (this.canPush() === true) {
        this.queueControl.push(element);
        this.delDivFlow('take');
        this.checkqueueControl('add');
        $('#queue input').val('');
    } else {
        $('#queue #elements .row').prepend(this.divFlow('Queue Overflow'));
        $('#queue .add').addClass('disabled').css('pointer-events', 'none');
    }
}

Queue.prototype.pop = function () {
    if (this.isEmpty() === true) {
        $('#queue #elements .row').append(this.divFlow('Queue Underflow'));
        $('#queue .take').addClass('disabled').css('pointer-events', 'none');
    } else {
        this.queueControl.splice(0, 1);
        this.delDivFlow('add');
        this.checkqueueControl('take');
        $('#queue input').val('');
    }
}

$(document).ready(function () {
    newQueue = new Queue();

    $('#queue').on('click', '.add', function () {
        var element = $('#queue input').val();

        if (element === '') {
            alert('Add the element');
        } else {
            newQueue.push(element);
        }
    });

    $('#queue').on('click', '.take', function () {
        newQueue.pop();
    });
});