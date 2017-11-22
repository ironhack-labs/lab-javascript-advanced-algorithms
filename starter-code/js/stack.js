function Stack() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
}

Stack.prototype.isEmpty = function () {
    if (this.stackControl.length === 0) {
        return true;
    } else {
        return false;
    }
}

Stack.prototype.canPush = function () {
    if (this.stackControl.length === this.MAX_SIZE) {
        return false;
    } else {
        return true;
    }
}

Stack.prototype.divFlow = function (text) {
    return '<div id="limit" class="row"><div class="col-sm-3 element limit">' + text + '</div></div>';
}

Stack.prototype.delDivFlow = function (btn) {
    if (btn === 'take') {
        $('#stack #elements #limit:last').remove();
        $('#stack .take').removeClass('disabled').css('pointer-events', 'auto');
    } else if (btn === 'add') {
        $('#stack #elements #limit:first').remove();
        $('#stack .add').removeClass('disabled').css('pointer-events', 'auto');
    }
}

Stack.prototype.runStackControl = function () {
    this.stackControl.forEach(function (value, index) {
        var child = 8 - index;
        $('#stack #elements').children(':nth-child(' + child + ')').children().addClass('in').html(value);
    });
}

Stack.prototype.checkStackControl = function (btn) {
    if (btn === 'take') {
        $('#stack #elements > .row').children().removeClass('in').html('');
        this.runStackControl();
    } else {
        this.runStackControl();
    };
};

Stack.prototype.push = function (element) {
    if (this.canPush() === true) {
        this.stackControl.push(element);
        this.delDivFlow('take');
        this.checkStackControl('add');
        $('#stack input').val('');
    } else {
        $('#stack #elements').prepend(this.divFlow('Stack Overflow'));
        $('#stack .add').addClass('disabled').css('pointer-events', 'none');
    }
}

Stack.prototype.pop = function () {
    if (this.isEmpty() === true) {
        $('#stack #elements').append(this.divFlow('Stack Underflow'));
        $('#stack .take').addClass('disabled').css('pointer-events', 'none');
    } else {
        this.stackControl.splice(this.stackControl.length - 1, 1);
        this.delDivFlow('add');
        this.checkStackControl('take');
        $('#stack input').val('');
    }
}

$(document).ready(function () {
    newStack = new Stack();

    $('#stack').on('click', '.add', function () {
        var element = $('#stack input').val();

        if (element === '') {
            alert('Add the element');
        } else {
            newStack.push(element);
        }
    });

    $('#stack').on('click', '.take', function () {
        newStack.pop();
    });
});