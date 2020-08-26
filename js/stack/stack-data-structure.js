class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    
  }

  canPush() {
    if(this.stackControl.length == this.MAX_SIZE)
        return false

    else if (this.stackControl.length < 10)
        return true
     
  }

  display() {
    return this.stackControl.length

  }

  isEmpty() {
    if (this.stackControl.length <= 0)
      return true
    else
    return false
  }

  push(item) {
    this.stackControl.push(item)
    if (this.stackControl.length > this.MAX_SIZE){  
      return 'Stack Overflow'
    }
    else  
    return [item]
  
  }

  pop() {
    let pepe = this.stackControl.pop()
    if (this.stackControl.length == 0) 
      return 'Stack Underflow'
    return pepe
  }
  
}
