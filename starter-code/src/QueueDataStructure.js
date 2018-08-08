
class QueueDataStructure {
  constructor(arr = [], maxNum) {
    this.arr = arr;
    this.maxNum = maxNum;
  }

  checkIfEmpty() {
    return this.arr.length === 0
  }
  checkIfFull() {
    return this.arr.length === this.maxNum
  }
  enqueue(item) {
    if (this.checkIfFull()) {
      return 
    } else {
      return this.arr.push(item)
    }
  }
  dequeue() {
    if (this.checkIfEmpty()) {
      return 
    } else {
      return this.arr.shift()
    }
  }
}

