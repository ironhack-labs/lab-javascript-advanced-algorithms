var Queue = function QueueDataStructure() {
    this.queueArray = [];
    this.maxElements = 10;
    this.minElements = 1;
};

Queue.prototype.add = function(input) {
    if (this.canAddMore()) this.queueArray.unshift(input);
};

Queue.prototype.take = function() {
    if (this.canTake()) this.queueArray.pop();
};

Queue.prototype.canAddMore = function() {
    if (this.queueArray.length < this.maxElements) return true;
    else return false;
};

Queue.prototype.canTake = function() {
    if (this.queueArray.length >= this.minElements) return true;
    else return false;
};
