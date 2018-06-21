function QueueDataStructure() {
    this.queue = [];
    this.size = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
    if ((this.queue.length == 0)) {
        return true;
    }
};

QueueDataStructure.prototype.canPush = function() {
    if (queue.length < this.size) {
        return true;
    }
};

QueueDataStructure.prototype.push = function(e) {
    if (this.canPush()) {
        this.queue.push(e);
    }
};

QueueDataStructure.prototype.pop = function () {
    if (!this.isEmpty()) {
        this.queue.pop();
    }
}

var myqueue = new QueueDataStructure();