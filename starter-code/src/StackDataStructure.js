
class StackDataStructure {
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
  push(item) {
    if (this.checkIfFull() === 'Stack Overflow') {
      console.log('full')
      return 
    } else {
      console.log('not full')
      return this.arr.push(item)
    }
  }
  pop() {
    if (this.checkIfEmpty() === 'Stack Underflow') {
      return 
    } else {
      return this.arr.pop()
    }
  }
}
