class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
  // ... your code goes here
    if(this.stackControl.length < this.MAX_SIZE)
    {
      return true
    }
    else
    {
      return false
    }
    
  }

  display() {
    // ... your code goes here
    return this.stackControl

  }

  isEmpty() {
    // ... your code goes here
    if(this.stackControl.length === 0)
    {
      return true
    }
    else
    {
      return false
    }
  }

  push(item) {
    if(!this.canPush()){

      return 'Stack Overflow'

    }else{

      this.stackControl.push(item)
      
      return this.stackControl
    }
  }

  pop() {
    if(this.isEmpty()){

      return 'Stack Underflow'

    }else{

      return this.stackControl.pop()
    }
  }
}
