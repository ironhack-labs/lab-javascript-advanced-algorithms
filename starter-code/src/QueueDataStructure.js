function QueueDataStructure() {
    this.queueControl = []
    this.MAX_SIZE = 8
    this.isEmpty = function() {
        return (this.queueControl.length === 0)
    }
    this.canEnqueue = function() {
        return (this.MAX_SIZE !== this.queueControl.length)
    }
    this.enqueue = function(arg) {
        if (this.MAX_SIZE === this.queueControl.length) {
            return 'Queue Overflow'
        } else {
            this.queueControl.unshift(arg)
            return [arg]
        }
    }
    this.dequeue = function() {
        if (this.queueControl.length === 0) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop()
        }
    }
}