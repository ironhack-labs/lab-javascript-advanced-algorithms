function QueueDataStructure() {
    this.queueControl = []
    this.MAX_SIZE = 12

    this.isEmpty = function () {
        return !Boolean(this.queueControl.length)
    }

    this.canEnqueue = function () {
        return this.queueControl.length !== this.MAX_SIZE
    }

    this.dequeue = function (element) {
        if (!this.isEmpty()) return this.queueControl.pop()
        else return 'Queue Underflow'
    }

    this.enqueue = function (element) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(element)
            return this.queueControl
        }
        else return 'Queue Overflow'
    }
}
