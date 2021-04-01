class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.MAX_SIZE = true) {
      return false
    } 
      return true

  }

  display() {
    // ... your code goes here
  
        
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length != 0) {
      return false
    }
    return true
  }

  push(item) {
    // ... your code goes here

    this.stackControl.push(item)
    
       return this.stackControl

    
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
     return this.stackControl.pop()
    }
    
      return 'Stack Underflow'

  }
}
