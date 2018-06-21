function QueueDataStructure () {
    this.queue = [];
    this.MAX_ITEMS = 10;
}

QueueDataStructure.prototype.enqueue = function (input) {
    var _this = this;
    if (_this.canEnqueue()) {
        _this.queue.unshift(input);
        return _this.queue;
    } else {
        return 'Queue Overflow';
    }
    
}

QueueDataStructure.prototype.canEnqueue = function () {
    var _this = this;
    if (_this.queue.length === _this.MAX_ITEMS) {
        return false;
    } else {
        return true;
    }
}

QueueDataStructure.prototype.dequeue = function () {
    var _this = this;
    if (!_this.isEmpty()){
    _this.queue.shift();
    } else {
    return 'Queue Underflow';
}
}

QueueDataStructure.prototype.isEmpty = function () {
    var _this = this;
    if (_this.queue.length === 0) {
        return true;
    } else {
        return false;
    }
}

