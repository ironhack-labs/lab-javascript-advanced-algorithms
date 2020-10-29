class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
   if (this.MAX_SIZE > this.stackControl.length) {
     return true 
    } else {
      return false
   }
      
  }  
  display() {
    if (this.stackControl.length === 0) {
      return true
     } else {
       return false
    }
  }

  isEmpty() {
   if (this.stackControl.length === 0) {
     return true
   } else {
     return false
   }
  }

  push(item) {
    
    if (this.stackControl.length === this.MAX_SIZE) {
       return 'Stack Overflow'
      } else {
        this.stackControl.push(item)
        return this.stackControl
      }
    }
     

  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow'
      
    } else {
      return  this.stackControl.pop()
    }
  
}
}