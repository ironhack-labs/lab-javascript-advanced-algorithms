
class QueueDataStructure {
  constructor(arr = [], maxNum) {
    this.arr = arr;
    this.maxNum = maxNum;
  }

  checkIfEmpty() {
    if (this.arr.length === 0) {
      return 'Stack Underflow';
    } else {
      return this.arr;
    }
  }
  checkIfFull() {
    if (this.arr.length === this.maxNum) {
      return 'Stack Overflow';
    } else {
      return this.arr;
    }
  }
  enqueue(item) {
    if (this.checkIfFull === 'Stack Overflow') {
      return 
    } else {
      return this.arr.push(item)
    }
  }
  dequeue(item) {
    if (this.checkIfEmpty === 'Stack Underflow') {
      return 
    } else {
      return this.arr.shift(item)
    }
  }
}

