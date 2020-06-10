class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.MIN_SIZE = 0;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl < this.MAX_SIZE ? true : false
  }

  
  display() {
    return this.stackControl
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
   return this.stackControl.length === 0 ? true : false
  }

  push(item) {
    // ... your code goes here
    // if (this.stackControl.length === this.MAX_SIZE){
    //       return false
    // }
    if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(item)
      return this.stackControl
    } else { 
      return 'Stack Overflow'
    }
    } 

  pop() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      return "Stack Underflow"
    } 
    return this.stackControl.pop()
    }
  
}
