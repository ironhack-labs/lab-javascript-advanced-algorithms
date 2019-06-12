class StackDataStructure {
    constructor() { this.stackControl =[]
    this.MAX_SIZE = 8};

    isEmpty() {
      return this.stackControl.length === 0
    } 

    canPush() {
      return this.stackControl.length < this.MAX_SIZE
    } 

    push(item) {

      if (!this.canPush()) { 
      return  'Stack Overflow'
    } else {
      this.stackControl.push(item)
      return this.stackControl
    }  
    } 

    pop(element) {

      if (this.isEmpty()){ 
        return  'Stack Underflow'
      } else{
       return this.stackControl.pop(element)
      } 
    } 


    
}
