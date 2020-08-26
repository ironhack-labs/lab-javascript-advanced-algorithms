class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length < this.MAX_SIZE){
      return true
    } else{
      return false
    }

  }

  display() {
    // ... your code goes here
    return this.stackControl
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0 ) {
      return true
    }else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    this.stackControl.push(item)
    this.isEmpty()
    if(this.stackControl.length > this.MAX_SIZE){
      this.canPush()
      return 'Stack Overflow'
    }
    return this.stackControl
  }

  pop() {
    // ... your code goes her
    if(this.stackControl.length === 0){
      return 'Stack Underflow'
    }
    const out = this.stackControl.pop()
    return out

  }
}
