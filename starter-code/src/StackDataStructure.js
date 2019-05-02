class StackDataStructure{ 

  constructor(){
    
    this.stackControl = [],
    this.MAX_SIZE = 10
    this.counter = 0

  }

    isEmpty() { 
      if (this.stackControl.length == 0) {
        return true
      } else { return false}
    }
  
    canPush() {
      if(this.stackControl.length < this.MAX_SIZE) {
        return true
      }  
      else if (this.stackControl.length == this.MAX_SIZE) { 
        return false }
    }

    push(element) {
      if (this.canPush()){
        this.stackControl.push(element)
        //this.counter++
        currentDiv--
        return this.stackControl
      } else if(!this.canPush()){counter
        return "Stack Overflow"
      }
    }

    pop() {
      let lastElm = this.stackControl[this.stackControl.length-1]
      if(this.isEmpty()){
        return 'Stack Underflow'
      } else {
        this.stackControl.pop()
        currentDiv++
        //this.counter--
        return lastElm 
      }
    }
  }