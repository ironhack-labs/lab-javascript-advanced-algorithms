class StackDataStructure {
  constructor(stackControl, MAX_SIZE) {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty()
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE){

        return true

    } else {

        return false
    }
  }

  display() {
    
  }

  isEmpty() {
    if (this.stackControl.length == 0) {

      return true
    
    } else {
    
      return false
    }
  }

  push(item) {

    if (this.canPush()){ 

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

      let lastElement = this.stackControl[this.stackControl.length -1]
      
      this.stackControl.pop()
       
      return lastElement
        
    }
  }
}
