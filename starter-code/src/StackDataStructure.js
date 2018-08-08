
class StackDataStructure {
  constructor(arr = [], maxNum) {
    this.arr = arr;
    this.maxNum = maxNum;
  }

  checkIfEmpty() {
    return this.arr.length === 0;
  }
  checkIfFull() {
    return this.arr.length === this.maxNum
  }
  push(item) {
    if (this.checkIfFull()) {
      console.log('full')
      return 
    } else {
      console.log('not full')
      return this.arr.push(item)
    }
  }
  pop() {
    if (this.checkIfEmpty()) {
      return 
    } else {
      return this.arr.pop()
    }
  }
}
