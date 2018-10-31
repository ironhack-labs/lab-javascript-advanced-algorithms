queue = new QueueDataStructure();

const queueRepresent = () => {
    const queueArr = queue.queueControl
    for (var i = 0; i < queueArr.length; i++) {
        $($(".queue")[i]).addClass("queued")
    }
}

const queueUnrepresent = () => {
    const queueArr = queue.queueControl
    $($(".queue")[queueArr.length]).removeClass("queued")
}


$(".add-q").on("click", function () {
    console.log($("#queue-push").val())
    queue.enqueue($("#queue-push").val());
    queueRepresent();
});

$(".take-q").on("click", function () {
    queue.dequeue();
    queueUnrepresent();
});
