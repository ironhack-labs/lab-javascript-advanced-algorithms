function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 8
    this.isEmpty = function () {
        if (this.queueControl.length === 0) {
            return true
        } else {
            return false
        }
    }
    this.canEnqueue = function () {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }
    this.enqueue = function (n) {
        if (this.canEnqueue() === true) {
            (this.queueControl).unshift(n)
            return this.queueControl
        } else return "Queue Overflow"
    }
    this.dequeue = function () {
        if (this.isEmpty() === false) {
            var taken = (this.queueControl).pop()
            return taken
        } else {
            return "Queue Underflow"
        }
    }
}