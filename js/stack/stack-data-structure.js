class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
    
  }

  display() {
    let item = document.querySelector('li.inactive')
    item.className = 'active'
    console.log(item)
    return item
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }


  push(item) {
    this.stackControl.push(item)
    
    if(this.stackControl.length > this.MAX_SIZE) {
      return 'Stack Overflow'
    }else if (this.stackControl.length === this.MAX_SIZE) {
      return false
    }
    return this.stackControl
  }

  pop() {

  if (this.stackControl.length === 0) {
    return 'Stack Underflow'
   }
    return this.stackControl.pop()
  }
}
