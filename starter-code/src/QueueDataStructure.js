function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function () {
    return this.queueControl.length === 0
}

QueueDataStructure.prototype.canEnqueue = function () {
    return this.queueControl.length < this.MAX_SIZE;
}

QueueDataStructure.prototype.enqueue = function (item) {
    if ($(".queue:first").hasClass("underflow")) {
        $(".queue:first").removeClass("underflow")
        $(".queue:first").html("");
    } else if (this.canEnqueue()) {
        this.queueControl.unshift(item);
        return this.queueControl;
    } else {
        $(".queued:last-child").addClass("overflow");
        $(".queue:last-child").text("Queue Overflow");
        return `Queue Overflow`;
    }
}

QueueDataStructure.prototype.dequeue = function () {
    if (this.isEmpty()) {
        $(".queue:first").addClass("underflow");
        $(".queue:first").text("Queue Underflow");
        return `Queue Underflow`;
    } else if ($(".queued:last-child").hasClass("overflow")) {
        $(".queue:last-child").html("");
        $(".queued:last-child").removeClass("overflow");
    } else {
        return this.queueControl.pop();
    }
}
