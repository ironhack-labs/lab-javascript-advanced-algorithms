class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }


  canEnqueue = () => this.queueControl.length <= this.MAX_SIZE ? this.queueControl.enqueue(item) : false


  isEmpty = () => this.queueControl.length === 0 ? true : false


  enqueue(item) {

    if (this.canEnqueue()) {
      this.queueControl.shift(item)
      return this.queueControl

    } else {
      return 'Stack Overflow'
    }
  }


  dequeue = () => this.isEmpty() ? 'Stack Underflow' : this.queueControl.unshift()

}

