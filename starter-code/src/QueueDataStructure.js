class QueueDataStructure {

    constructor() {
        this.queueControl = []
        this.MAX_SIZE=10
        this.index=0
    }

    isEmpty() {
        return this.queueControl.length ? false : true
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE ? true : false
    }

    enqueue(elm) {

        if (!this.canEnqueue()) return "Queue Overflow"
        this.queueControl.unshift(elm)
        return this.queueControl
    }

    dequeue() {

        if (this.isEmpty()) return "Queue Underflow"
        let elm = this.queueControl.pop()
        return elm
    }

    reorder(){
        
    }
}
