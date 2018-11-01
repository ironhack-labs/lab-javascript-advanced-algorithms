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
    queue.enqueue($("#queue-push").val());
    queueRepresent();
    $(".queued:last").text(`${$("#queue-push").val()}`)
    $("#queue-push").val("")
});

$(".take-q").on("click", function () {
    queue.dequeue();
    $(".queued:last").text(`${$("#queue-push").html()}`);
    queueUnrepresent();
});
