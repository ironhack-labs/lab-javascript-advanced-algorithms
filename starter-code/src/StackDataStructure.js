class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 5;
  }

  isEmpty(){
    return (this.stackControl.length === 0);
  }

  canPush(){
    return (this.stackControl.length < this.MAX_SIZE);
  }

  push(element){
    if(!this.canPush())return 'Stack Overflow'
    this.stackControl.push(element);

    return this.stackControl;
  }

  pop(){
    if(this.isEmpty())return 'Stack Underflow'

    return this.stackControl[this.stackControl.length-1];
  }
}


  
