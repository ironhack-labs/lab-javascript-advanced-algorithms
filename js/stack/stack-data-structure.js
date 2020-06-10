class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    }
    return false
  }

  display() {
    return this.stackControl
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length == 0){
      return true
    }
    return false
  }

  push(item) {

    if (this.canPush()){
      this.stackControl.push(item)
      return this.display()
    }
    else{
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.isEmpty()){
      return 'Stack Underflow'
    }
    else{
      let lastItem = this.stackControl.pop()
      return lastItem
    }


    // ... your code goes here
  }
}
