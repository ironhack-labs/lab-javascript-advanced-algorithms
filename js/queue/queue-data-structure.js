class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  // display() {
  //   // ... your code goes here
  // }


  canEnqueue = () => this.queueControl.length <= this.MAX_SIZE ? this.queueControl.enqueue(item) : false

  // canEnqueue() {
  //   if (this.queueControl.length < this.MAX_SIZE) {
  //     return this.queueControl.enqueue(item)
  //   }
  // }

  isEmpty = () => this.queueControl.length === 0 ? true : false

  // isEmpty() {
  //   if (this.queueControl.length === 0) {
  //     return true
  //   }
  // }

  enqueue(item) {

    if (this.canEnqueue()) {
      this.queueControl.shift(item)
      return this.queueControl

    } else {
      return 'Stack Overflow'
    }
  }


  dequeue = () => this.isEmpty() ? 'Stack Underflow' : this.queueControl.unshift()

  // dequeue() {
  //   if (this.isEmpty()) {
  //     return 'Stack Underflow'
  //
  //   } else {
  //     return this.queueControl.unshift()
  //   }
  // }
}

