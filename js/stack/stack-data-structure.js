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
    return this.stackControl

  }

  isEmpty() {
    // ... your code goes here

    if (this.stackControl.length === 0){
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }

  }

  pop() {
    // ... your code goes here
    if(!this.isEmpty()){   ////gracias Teo por el ! me lo apunto para no hacer la comparacion del False
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }
  }
}
