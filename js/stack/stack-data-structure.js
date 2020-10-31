class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  //() to check if we can add new elements to the stack (to avoid the stack overflow), a
  canPush() {
    // ... your code goes here

    if (this.MAX_SIZE <= this.stackControl.length) {
      return false;
    } else {

      return true
    }
  }

  display() {
    // ... your code goes here
  }
  // check if we can take an element from the stack (to prevent the stack underflow).
  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length == 0) {

      return true
    } else {
      return false
    }


  }

  push(item) {
    // ... your code goes here
    if (this.MAX_SIZE == this.stackControl.length) {
      return "Stack Overflow"
    } else {
      this.stackControl.push(item);

      this.stackControl[this.stackControl.length - 1]

      return this.stackControl
    }

  }

  pop() {
    // ... your code goes here
    if (this.stackControl.length == 0) {

      return 'Stack Underflow'
    } else {

      return this.stackControl[this.stackControl.length - 1]
    }
  }
}

let test = new StackDataStructure
test.MAX_SIZE = 1;
console.log(test.push(19));
console.log(test.push(88));
