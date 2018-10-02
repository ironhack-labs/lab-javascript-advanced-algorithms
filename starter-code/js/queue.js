var queue = new QueueDataStructure();
var queueContainer = document.getElementById("queue");
var over = false;


function insertQueueGaps(container) {
    var gap = '<div class="gap empty"></div>';
    for(var i = 0; i < queue.MAX_SIZE; i++) {
        $(container).find(".gaps").append(gap);
    }
}

function insertQueueInDOM(value, position) {
    var newQueue = '<span>' + value + '</span>';
    var gap = $('#queue .gaps').children()[position];
    $(gap).append(newQueue);
    $(gap).removeClass('empty');
    $(gap).addClass('inqueue');
}

function takeLastInDOM() {
    var lastGap = $('#queue .gaps').find('.gap.inqueue').first();
    $('#queue .gaps').append(lastGap);
    lastGap.removeClass('inqueue').addClass('empty');
    lastGap.empty();
}

function appendOverflowMsg() {
    var overflowmsg = '<div class="gap error"><span>Queue overflow</span></div>'
    $('#queue .gaps').append(overflowmsg);
    removeOverflowMsg();
}

function removeOverflowMsg() {
    setTimeout(function() {
        over = false;
        $('#queue .error').fadeOut(300);
    },2000);
    setTimeout(function() {
        $('#queue .error').remove();
    },2400);
    
}

function cleanInput() {
    $('#queue input').val('').focus();

}

$(document).ready(function(){
    insertQueueGaps(queueContainer);
})

$('#queue .btn-add').on('click', function() {
    var val = $(this).siblings('input').val();
    var pos = queue.queueControl.length;
    if(!queue.canEnqueue()) {
        if(!over) {
            appendOverflowMsg();
        }
        over = true;
    }
    if(val!== "" && queue.canEnqueue()) {
        console.log(queue.enqueue(val));
        insertQueueInDOM(val, pos);
        cleanInput();
    }
})

$('#queue .btn-take').on('click', function() {
    takeLastInDOM();
    queue.dequeue();
})