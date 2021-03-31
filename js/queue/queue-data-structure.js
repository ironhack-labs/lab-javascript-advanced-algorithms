class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    let item = document.querySelector('li.inactive')
    item.className = 'active'
    console.log(item)
    return item
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    this.queueControl.unshift(item)

    if (this.queueControl.length > this.MAX_SIZE) {
      return 'Queue Overflow'
    } else if (this.queueControl.length === this.MAX_SIZE) {
      return false
    }
    return this.queueControl
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    }
    return this.queueControl[this.queueControl.length-1]
  }
}
