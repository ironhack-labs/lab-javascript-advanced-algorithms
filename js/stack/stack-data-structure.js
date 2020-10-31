class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  //() to check if we can add new elements to the stack (to avoid the stack overflow), a
  canPush() {
    // ... your code goes here
    return true
  }

  display() {
    // ... your code goes here
  }
  // check if we can take an element from the stack (to prevent the stack underflow).
  isEmpty() {
    // ... your code goes here
    return true
  }

  push(item) {
    // ... your code goes here
    this.stackControl.push(item);
  }

  pop() {
    // ... your code goes here
  }
}
