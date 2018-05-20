$(document).ready(function () {
    var queueObject = new QueueDataStructure;

    addQueueItem(queueObject);
    removeQueueItem(queueObject);
    showOverUnderFlowQueue(queueObject);
});

function showOverUnderFlowQueue(queueObject) {
    if (queueObject.queueControl.length === 10) {
        $('#queue-overflow').show();
    } else {
        $('#queue-overflow').hide();
    }

    if (queueObject.queueControl.length === 0) {
        $('#queue-underflow').show();
    } else {
        $('#queue-underflow').hide();
    }
}

function addQueueItem(queueObject) {
    $("#add-queue-item").on("click", function () {
        var $queueValue = $("#queue-value").val();
        if ($queueValue) {
            queueObject.enqueue($queueValue);
            $("#queue-value").val('');
            itemListQueue(queueObject);
        }

        showOverUnderFlowQueue(queueObject);
    });
}

function removeQueueItem(queueObject) {
    $("#remove-queue-item").on("click", function () {
        queueObject.dequeue();
        itemListQueue(queueObject);
        showOverUnderFlowQueue(queueObject);
    });
}

function itemListQueue(queueObject) {
    $('.array-queue-item').empty();
    queueObject.queueControl.forEach(element => {
        var $item = $('#template-item').clone();
        $item[0].style.display = 'block';
        $item.text(element);     
        $(".array-queue-item").append($item);
    }); 
}