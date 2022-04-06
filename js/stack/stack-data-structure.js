class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if(this.stackControl.length < this.MAX_SIZE) return true;
    else return false;
  }

  isEmpty() {

    if(!this.stackControl.length) return true;
    else return false;
  }

  push(item) {

    if(this.canPush() == true){
     this.stackControl.push(item);
     return this.stackControl;
    } 
    else throw new Error('STACK_OVERFLOW');

    
  }

  pop() {

    if(!this.isEmpty()){
      let popedItem = this.stackControl.pop();
      return popedItem;
     } 
     else throw new Error('STACK_UNDERFLOW');
  

  }

  display() {
    return  this.stackControl
  }  
}

if (typeof module !== 'undefined') module.exports = Stack;
