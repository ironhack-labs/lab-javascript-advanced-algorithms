class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE){
      return true 
    }  else {
      return false
    }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length === 0){
      return true
    } else {
      return false
    }
  }

  push(item) {
    if(this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow'
    } else {
      return this.stackControl.pop()
    }
    
  }
 
}
