class Stack {
    constructor() {
      this.stackControl = [];
      this.MAX_SIZE = 10;
    }
  
    canPush() {
      if (this.stackControl < this.MAX_SIZE){
        return true
      } else  {
       return false
      }
  
      
    }
  
    isEmpty() {
      if (this.stackControl.length === 0){
        return true
      } else {
        return false
      }
  
    }
  
    push(item) {
      if (canPush() = true) {
  
      let pushArr = this.stackControl
        return pushArr.push(item)  
      }   else {
          console.alert('STACK_OVERFLOW') 
        }
       
    
      } 
}