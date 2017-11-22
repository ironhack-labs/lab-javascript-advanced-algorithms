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
        $('#elements #limit:last').remove();
        $('.take').removeClass('disabled').css('pointer-events', 'auto');
    } else if (btn === 'add') {
        $('#elements #limit:first').remove();
        $('.add').removeClass('disabled').css('pointer-events', 'auto');
    }
}

Stack.prototype.runStackControl = function () {
    this.stackControl.forEach(function(value, index){
        var child = 8 - index;
        $('#elements').children(':nth-child('+ child +')').children().addClass('in').html(value);
    });
}

Stack.prototype.checkStackControl = function (btn) {
    if(btn === 'take'){
        $('#elements > .row').children().removeClass('in').html('');
        this.runStackControl();
    }else{
        this.runStackControl();
    };
};

Stack.prototype.push = function (element) {
    if (this.canPush() === true) {
        this.stackControl.push(element);
        this.delDivFlow('take');
        this.checkStackControl('add');
        $('#stack input').val('');
        console.log(this.stackControl);
    } else {
        $('#elements').prepend(this.divFlow('Stack Overflow'));
        $('.add').addClass('disabled').css('pointer-events', 'none');
    }
}

Stack.prototype.pop = function () {
    if (this.isEmpty() === true) {
        $('#elements').append(this.divFlow('Stack Underflow'));
        $('.take').addClass('disabled').css('pointer-events', 'none');
    } else {
        this.stackControl.splice(this.stackControl.length - 1, 1);
        this.delDivFlow('add');
        this.checkStackControl('take');
        console.log(this.stackControl);
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