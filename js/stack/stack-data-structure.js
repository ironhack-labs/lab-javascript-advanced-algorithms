class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true

    } else {

      return false
    }

  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
    //console.log(this.stackControl.length);
    if (this.stackControl.length == 0) {
      return true

    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    this.stackControl.push(item)

    if (this.stackControl.length >= this.MAX_SIZE) {
      return "Stack Overflow"
    }

    return this.stackControl



  }

  pop() {
    // ... your code goes here

    if (this.stackControl === 0) {
      
      return this.stackControl.length - 1

      

    } else {

      return "Stack Underflow"
    }
  }
}
