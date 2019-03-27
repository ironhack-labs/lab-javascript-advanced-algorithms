class StackDataStructure {
  constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }
    isEmpty(){
      return this.stackControl.length === 0;
    }
    canPush(){
      return this.stackControl.length < this.MAX_SIZE;
    }
    push(n){
      if(this.canPush()){
        this.stackControl.push(n);
      }
      return this.stackControl.length >= this.MAX_SIZE ? 'Stack Overflow' : this.stackControl;
    }
    pop(){
      return this.stackControl.length === 0 ? 'Stack Underflow' : this.stackControl.pop();
    }
}
