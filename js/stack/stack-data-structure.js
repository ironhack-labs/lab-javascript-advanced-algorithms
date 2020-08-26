class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.MAX_SIZE > this.stackControl){
      return true
    }else {
      return false
    }
  }

  display() {
    return this.stackControl
  }

  isEmpty() {
    if(this.stackControl.length === 0){
      return true
    } else {
      return false
    }
  }

  push(item) {
    if(this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }
  }

  pop() {
    if(this.isEmpty()){
      return 'Stack Underflow'
    } else {
      //let lastItem = this.stackControl.pop()
      //return lastItem
      //this.stackControl = this.stackControl.length - 1
    return this.stackControl.pop()
  } 
 }
}
