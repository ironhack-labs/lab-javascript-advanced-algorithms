function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;

    this.isEmpty = () => {
        return this.queueControl.length === 0 ? true : false;
    }

    this.canEnqueue = () => {
        return this.queueControl.length < this.MAX_SIZE ? true : false;
    }

    this.enqueue = arg1 => {
        result = this.canEnqueue();
        return result === false ? "Queue Overflow" : (this.queueControl.unshift(arg1), this.queueControl);
    }

    this.dequeue = () => {
        return this.queueControl.length === 0
        ? 'Queue Underflow'
        : this.queueControl.pop()
    }

}
