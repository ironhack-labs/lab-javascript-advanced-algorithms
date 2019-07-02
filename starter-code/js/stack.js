var stack = new StackDataStructure

class StackDataStructure {
  constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 0;
    
  }
  isEmpty(){
  return !this.MAX_SIZE
  }
   canPush(){
    if(!this.isEmpty()){
      return 'Stack Owerflow'
    }
    this.stackControl.push(item)
  }
  pop(){
    if(this.isEmpty()){
      return'stack Underflow';
    }
    this.stackControl.pop();
  }
  }
