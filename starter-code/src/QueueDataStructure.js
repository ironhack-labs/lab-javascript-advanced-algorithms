//FIFO
function QueueDataStructure() {

    this.queueControl = [];
    this.MAX_SIZE = 0;

    this.isEmpty = function () {
        return this.queueControl.length ? false : true;
    }

    this.canEnqueue = function () { return true; }

    this.enqueue = function (element) { this.queueControl.unshift(element); }

    this.dequeue = function () { }
}
