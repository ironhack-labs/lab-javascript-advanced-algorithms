function QueueDataStructure() {
    this.queueControl = []
    this.MAX_SIZE = 100
    this.isEmpty = () => {
        if (this.queueControl.length > 0) return false
        return true
    }
    this.canEnqueue = () => {
        if (this.queueControl.length === this.MAX_SIZE) return false
        return true
    }
    this.enqueue = (element) => {

        if (!this.canEnqueue()) { return 'Queue Overflow' }
        this.queueControl.unshift(element)
        return this.queueControl
    }
    this.dequeue = () => {
        if (this.queueControl.length < 1) return 'Queue Underflow'
        return this.queueControl[this.queueControl.length - 1]
    }
}
