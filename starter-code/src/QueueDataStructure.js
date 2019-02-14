function QueueDataStructure() {
    this.queueControl = []
    this.MAX_SIZE = 8
    this.isEmpty = function() {
        return (this.queueControl.length === 0)

    }
    this.canEnqueue = function() {
        return (this.queueControl.length <= this.MAX_SIZE - 1)
    }
    this.enqueue = function(arg) {
        if (this.queueControl.length === this.MAX_SIZE) {
            return "Queue Overflow"
        } else {
            this.queueControl.unshift(arg)
            return this.queueControl

        }


    }

    this.dequeue = function(a) {
        if (this.queueControl.length === 0) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop()
        }

    }

}